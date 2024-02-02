from fastapi import FastAPI
from .routers import roadmap

# initialize the app
app = FastAPI()

app.include_router(roadmap.router)







