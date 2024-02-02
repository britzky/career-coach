from pydantic import BaseModel
from typing import List

# Schema to build roadmap
class CareerInfo(BaseModel):
    career: str
    experience: str
    hours_dedicated_to_learning: int
    budget: int
    skills: List[str]
    preferred_learning_style: str
    timeframe: str
    current_knowledge: str

# Schema for User 