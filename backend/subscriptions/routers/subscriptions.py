from fastapi import APIRouter, HTTPException, status
# from subscriptions.db.models.subscriptions import subscriptions


router = APIRouter(tags=["subscriptions"],
                responses={status.HTTP_404_NOT_FOUND:{"message":"No encontrado"}})

@router.post("/history")
async def get_history():
    return {"message": "Este es el historial de las suscripciones"}