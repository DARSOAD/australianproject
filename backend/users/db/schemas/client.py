import boto3

# Configurar cliente de DynamoDB para NoSQL Workbench
db_client = boto3.resource(
    "dynamodb",
    endpoint_url="http://localhost:9000",  # Dirección del NoSQL Workbench
    aws_access_key_id="test",  # Credenciales simuladas
    aws_secret_access_key="test",
    region_name="us-east-1",  # Especifica una región válida
)

# Opción para conectarse a DynamoDB en AWS
# db_client = boto3.resource('dynamodb', region_name='us-east-1')  # Cambia a tu región
