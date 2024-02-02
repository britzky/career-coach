import openai
import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

openai_api_key = os.getenv('OPENAI_API_KEY')
assistant_id = os.getenv('OPEN_AI_ASSISTANT_ID')
client = openai.Client(api_key=openai_api_key)