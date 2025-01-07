from fastapi import FastAPI
from users.routers import users


app = FastAPI()

# Registrar las rutas específicas del microservicio de usuarios
app.include_router(users.router)