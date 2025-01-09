from fastapi import FastAPI, Request
from users.main import app as users_app
# from orders.main import app as orders_app
# from subscriptions.main import app as subscriptions_app
# from catalog.main import app as catalog_app

app = FastAPI()

@app.get("/")
async def inicio(request: Request):
    base_url = str(request.base_url)
    return {
        "description":'La url de la documentación es la siguiente: Copia y pega el link',
        "url": f"{base_url}docs"
        }

# Registrar las rutas de todos los microservicios
app.mount("/users", users_app)  # Rutas de usuarios
# app.mount("/orders", orders_app)  # Rutas de pedidos
# app.mount("/subscriptions", subscriptions_app)  # Rutas de suscripciones
# app.mount("/catalog", catalog_app)  # Rutas de catálogo

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
