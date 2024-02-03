from fastapi import FastAPI
from .database import SessionLocal
from .routers import roadmap

# initialize the app
app = FastAPI()

app.include_router(roadmap.router)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()







