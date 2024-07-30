from supabase import create_client
from .config import supabase_url, supabase_api_key

supabase = create_client(supabase_url, supabase_api_key)
