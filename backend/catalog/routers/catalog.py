from fastapi import APIRouter, HTTPException, status
# from catalog.db.models.catalog import catalog


router = APIRouter(tags=["catalog"],
                responses={status.HTTP_404_NOT_FOUND:{"message":"No encontrado"}})

@router.get("/")
async def get_catalog():
    return {"message": "Estos son los productos"}