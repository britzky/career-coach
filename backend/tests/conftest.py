import pytest
from fastapi.testclient import TestClient
import os
from dotenv import load_dotenv, find_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '..', 'app', '.env')

load_dotenv(dotenv_path)

def get_env_variable(var_name, default=None):
    return os.getenv(var_name, default)

os.environ['OPENAI_API_KEY'] = os.getenv('OPENAI_API_KEY')
os.environ['OPEN_AI_ASSISTANT_ID'] = os.getenv('OPEN_AI_ASSISTANT_ID')
os.environ['DATABASE_URL'] = os.getenv('DATABASE_URL')
os.environ['SECRET_KEY'] = os.getenv('SECRET_KEY')
os.environ['ALGORITHM'] = os.getenv('ALGORITHM', 'HS256')
os.environ['ACCESS_TOKEN_EXPIRE_MINUTES'] = os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES', '30')

from app.main import app

@pytest.fixture(scope="module")
def client():

    with TestClient(app) as client:
        yield client