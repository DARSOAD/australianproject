from datetime import datetime
from typing import List, Dict, Optional
from pydantic import BaseModel

class CognitoAttribute(BaseModel):
    Name: str
    Value: str

class User(BaseModel):
    Username: str  # Clave primaria (Cognito devuelve "Username")
    email: Optional[str] = None  # Se extraerá de Attributes
    password: Optional[str] = None  # Cognito no lo devuelve, pero puede incluirse al registrar
    custom_attributes: Optional[Dict[str, str]] = None  # Se extraerá de Attributes
    last_login: Optional[datetime] = None  # Tomado de UserLastModifiedDate
    UserCreateDate: Optional[datetime] = None
    UserLastModifiedDate: Optional[datetime] = None
    Enabled: Optional[bool] = None
    UserStatus: Optional[str] = None

    @classmethod
    def from_cognito_response(cls, data: dict):
        """ Extrae y convierte la respuesta de Cognito en una instancia de User """
        attributes = {attr["Name"]: attr["Value"] for attr in data.get("Attributes", [])}

        return cls(
            Username=data.get("Username"),
            email=attributes.get("email"),
            custom_attributes={k: v for k, v in attributes.items() if k.startswith("custom:")},
            last_login=datetime.fromisoformat(data["UserLastModifiedDate"]) if "UserLastModifiedDate" in data else None,
            UserCreateDate=datetime.fromisoformat(data["UserCreateDate"]) if "UserCreateDate" in data else None,
            UserLastModifiedDate=datetime.fromisoformat(data["UserLastModifiedDate"]) if "UserLastModifiedDate" in data else None,
            Enabled=data.get("Enabled"),
            UserStatus=data.get("UserStatus"),
        )
