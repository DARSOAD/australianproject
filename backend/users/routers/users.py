from fastapi import APIRouter, HTTPException, status
from users.db.models.users import User


router = APIRouter(prefix="/users", 
                tags=["users"],
                responses={status.HTTP_404_NOT_FOUND:{"message":"No encontrado"}})

@router.post("/register")
async def register_user(user: User):
    return {"message": "User registered successfully XD"}