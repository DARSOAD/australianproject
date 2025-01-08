from fastapi import APIRouter, HTTPException, status
# from orders.db.models.orders import orders


router = APIRouter(tags=["orders"],
                responses={status.HTTP_404_NOT_FOUND:{"message":"No encontrado"}})

@router.get("/")
async def get_orders():
    return {"message": "Estas son todas las ordenes"}