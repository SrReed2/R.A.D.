## aca se maneja que datos se van a recibir y enviar, que se permite y que no
## se valida la informacion ojo aca no guarda nada solo valida la informacion :v

from pydantic import BaseModel
from typing import Optional


class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    role: Optional[str] = "student"


class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    role: str

    class Config:
        from_attributes = True