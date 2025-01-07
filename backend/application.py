from fastapi import FastAPI
from backend.users.main import app as users_app
# from orders.main import app as orders_app
# from subscriptions.main import app as subscriptions_app
# from catalog.main import app as catalog_app

app = FastAPI()

# Registrar las rutas de todos los microservicios
app.mount("/users", users_app)  # Rutas de usuarios
# app.mount("/orders", orders_app)  # Rutas de pedidos
# app.mount("/subscriptions", subscriptions_app)  # Rutas de suscripciones
# app.mount("/catalog", catalog_app)  # Rutas de catálogo

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
