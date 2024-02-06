from fastapi import FastAPI
from .routers import roadmap, quote

# initialize the app
app = FastAPI()

app.include_router(roadmap.router)
app.include_route(quote.router)







