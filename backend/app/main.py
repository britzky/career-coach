from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import roadmap, quote

# initialize the app
app = FastAPI()

# allowed_origins = [
#     "http://localhost:5173",
#     "https://main--career-planner.netlify.app",
#     "https://career-planner.netlify.app"

# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers =["*"]
)

app.include_router(roadmap.router)
app.include_router(quote.router)

# wake the server up
@app.get("/")
def wake_up():
    return {"message": "Server is awake!"}









