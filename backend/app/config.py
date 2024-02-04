import openai
from starlette.config import Config

config = Config(".env")

openai_api_key = config('OPENAI_API_KEY', cast=str)
assistant_id = config('OPEN_AI_ASSISTANT_ID', cast=str)
database_url = config('DATABASE_URL', cast=str)
secret_key = config('SECRET_KEY', cast=str)
algorithm = config('ALGORITHM', cast=str, default="HS256")
access_token_expire_minutes = config("ACCESS_TOKEN_EXPIRE_MINUTES", cast=int, default=30)
client = openai.Client(api_key=openai_api_key)