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
class User(BaseModel):
    username: str
    email: str
    password: str

# Schema for roadmap course info
class RoadmapCourseInfo(BaseModel):
    coursename: str
    link: str
    skilllevel: str
    price: str
    description: str

# Schema for roadmap sections
class RoadmapSection(BaseModel):
    month: str
    title: str
    courseInfo: RoadmapCourseInfo

# Schema for creating the roadmap object
class RoadmapObject(BaseModel):
    summary: str
    roadmap: List[RoadmapSection]

# Schema for reading the roadmap from the database
class Roadmap(RoadmapObject):
    id: int
    user_id: int

    # Class to tell Pydantic to treat the models as dictionaries
    class Config:
        orm_mode = True