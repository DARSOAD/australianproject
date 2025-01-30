import uuid
from datetime import datetime, timedelta, timezone 
from jose import jwt
import boto3
from fastapi import HTTPException
from users.db.schemas.client import db_client
from botocore.exceptions import NoRegionError

# Configuración
SECRET_KEY = "21DARR312SOAD"  # Clave secreta para JWT
ROLE_PERMISSIONS = {
    "GuestRole": ["dynamodb:Scan", "s3:GetObject"],
    "UserRole": ["dynamodb:GetItem", "dynamodb:PutItem", "s3:GetObject"],
}

# Cliente principal de DynamoDB apuntando a NoSQL Workbench
dynamodb_client = boto3.client(
    "dynamodb",
    endpoint_url="http://localhost:9000",  # Cambiado a NoSQL Workbench
    aws_access_key_id="test",  # Credenciales genéricas para simulación
    aws_secret_access_key="test",
    region_name="us-east-1",
)

# Tabla Cognito
cognito_table = dynamodb_client  # Cliente global para realizar operaciones con DynamoDB


class Boto4Client:
    def __init__(self, region_name="us-east-1"):
        self.region_name = region_name

    def admin_create_user(self, UserPoolId, Username, UserAttributes, TemporaryPassword, MessageAction=None):
        
        # Verificar si el usuario ya existe en la tabla Cognito
        existing_user = cognito_table.get_item(
            TableName="Cognito",
            Key={"username": {"S": Username}},
        ).get("Item")
        if existing_user:
            raise HTTPException(status_code=400, detail="Username is already register")
        
        # Generar un user_id único
        user_id = str(uuid.uuid4())
        
        # Extraer los atributos del usuario
        attributes = {attr["Name"]: attr["Value"] for attr in UserAttributes}
        email = attributes.get("email")
        role = attributes.get("custom:role")
        # Almacenar el usuario en la tabla Cognito
        cognito_table.put_item(
            TableName="Cognito",
            Item={
                "user_id": {"S": user_id},
                "username": {"S": Username},
                "email": {"S": email},
                "custom:role": {"S": role},
                "temporary_password": {"S": TemporaryPassword},
                "email_verified": {"BOOL": False},
                "created_at": {"S": datetime.now(timezone.utc).isoformat()},
            },
        )
        return {
                "message": "User registered successfully",
                "user": {
                    "Username": "testuser",
                    "Attributes": [
                        {"Name": "sub", "Value": "12345678-90ab-cdef-1234-567890abcdef"},
                        {"Name": "email", "Value": "testuser@example.com"},
                        {"Name": "name", "Value": "John Doe"},
                        {"Name": "phone_number", "Value": "+1234567890"},
                        {"Name": "address", "Value": "123 Main Street, New York, USA"},
                        {"Name": "custom:role", "Value": "user"},
                        {"Name": "custom:subscription_status", "Value": "active"}
                    ],
                    "UserCreateDate": "2025-01-29T12:34:56.789Z",
                    "UserLastModifiedDate": "2025-01-29T12:34:56.789Z",
                    "Enabled": 'true',
                    "UserStatus": "FORCE_CHANGE_PASSWORD"
                }
            }

    def list_tables(self):
        # try:
        #     response = dynamodb_client.create_table(
        #         TableName="TestTable",
        #         KeySchema=[
        #             {"AttributeName": "id", "KeyType": "HASH"},  # Partition Key
        #         ],
        #         AttributeDefinitions=[
        #             {"AttributeName": "id", "AttributeType": "S"},  # Tipo String
        #         ],
        #         ProvisionedThroughput={
        #             "ReadCapacityUnits": 5,
        #             "WriteCapacityUnits": 5,
        #         },
        #     )
        #     print("Tabla creada exitosamente:", response)
        # except Exception as e:
        #     print("Error al crear la tabla:", str(e))
        try:
            # Usar el cliente de DynamoDB para listar tablas
            response = dynamodb_client.list_tables()
            print("Tablas disponibles:", response.get("TableNames", []))
            table_names = response.get("TableNames", [])
            return {"TableNames": table_names}
        except NoRegionError:
            raise HTTPException(status_code=500, detail="No region specified. Make sure to configure AWS_DEFAULT_REGION.")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error listing tables: {str(e)}")

    def generate_jwt(self, user_id, role):
        # Generar un token JWT
        if role not in ROLE_PERMISSIONS:
            raise ValueError(f"Role {role} not found in ROLE_PERMISSIONS")

        payload = {
            "sub": user_id,
            "custom:role": role,
            "permissions": ROLE_PERMISSIONS[role],
            "exp": datetime.utcnow() + timedelta(hours=1),
            "iat": datetime.utcnow(),
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
        return token
