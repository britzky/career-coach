import os
import openai

# Function to get environment variables with a default value
def get_env_variable(var_name, default=None):
    return os.getenv(var_name, default)

# Set up your configuration variables
openai_api_key = get_env_variable('OPENAI_API_KEY')
assistant_id = get_env_variable('OPEN_AI_ASSISTANT_ID')
database_url = get_env_variable('DATABASE_URL')
SECRET_KEY = get_env_variable('SECRET_KEY')
ALGORITHM = get_env_variable('ALGORITHM', 'HS256')
ACCESS_TOKEN_EXPIRE_MINUTES = int(get_env_variable('ACCESS_TOKEN_EXPIRE_MINUTES', '30'))

# Initialize the OpenAI client
client = openai.Client(api_key=openai_api_key)