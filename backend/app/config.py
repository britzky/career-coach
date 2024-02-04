import openai
from starlette.config import Config

config = Config(".env")

openai_api_key = config('OPENAI_API_KEY', cast=str)
assistant_id = config('OPEN_AI_ASSISTANT_ID', cast=str)
database_url = config('DATABASE_URL', cast=str)
SECRET_KEY = config('SECRET_KEY', cast=str)
ALGORITHM = config('ALGORITHM', cast=str, default="HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = config("ACCESS_TOKEN_EXPIRE_MINUTES", cast=int, default=30)
client = openai.Client(api_key=openai_api_key)