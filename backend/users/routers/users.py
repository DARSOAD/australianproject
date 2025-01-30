from fastapi import APIRouter, HTTPException, status
from users.db.models.users import User
from users.services.users_services import search_user
from users.clients.boto4 import Boto4Client
from datetime import datetime
from typing import Optional, Dict
import uuid


router = APIRouter(tags=["users"],
                responses={status.HTTP_404_NOT_FOUND:{"message":"No encontrado"}})

cognito_client = Boto4Client()



@router.post("/register",response_model=User, status_code=status.HTTP_201_CREATED)
async def register_user(user: User):
    try:
        response = cognito_client.admin_create_user(
            UserPoolId="local-user-pool",
            Username=user.Username,
            UserAttributes=[
                {"Name": "email", "Value": user.email},
                {"Name": "custom:role", "Value": user.custom_attributes["role"]},
            ],
            TemporaryPassword=user.password,
        )
        user_data = response["user"]
        user = User.from_cognito_response(user_data)
        print('Hola')
        # print(user.json(indent=2))
        return user
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error registering user: {str(e)}")
    