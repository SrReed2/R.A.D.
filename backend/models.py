## aca se define como seran los datos en las tablas de la base de datos, 
## se crean las clases que representan cada tabla, con sus respectivas columnas y tipos de datos

from sqlalchemy import Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True)
    password_hash = Column(String)
    role = Column(String)