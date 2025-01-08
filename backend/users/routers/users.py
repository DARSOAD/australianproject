from fastapi import APIRouter, HTTPException, status
from users.db.models.users import User
from users.services.users_services import search_user

router = APIRouter(tags=["users"],
                responses={status.HTTP_404_NOT_FOUND:{"message":"No encontrado"}})

@router.post("/register")
async def register_user(user: User):
    return search_user("email",user.email)