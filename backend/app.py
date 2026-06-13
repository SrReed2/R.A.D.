## nueva version, aca lo que hice es integrar todos los cambios que hicimos



from fastapi import FastAPI

from routes.auth import router as auth_router
from database import Base, engine


# Crear tablas definidas en models.py
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="R.A.D API",
    description="Backend del sistema educativo inteligente R.A.D",
    version="1.0.0"
)


# Rutas de autenticacion 
app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"]
)


# Endpoint de prueba
@app.get("/")
def read_root():
    return {
        "message": "R.A.D backend funcionando correctamente"
    }