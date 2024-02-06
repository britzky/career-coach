from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import roadmap, quote

# initialize the app
app = FastAPI()

allowed_origins = [
    "http://localhost:5173/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers =["*"]
)

app.include_router(roadmap.router)
app.include_router(quote.router)







