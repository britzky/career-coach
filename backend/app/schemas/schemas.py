from pydantic import BaseModel
from typing import List
from datetime import datetime

class CourseBase(BaseModel):
    coursename: str
    link: str
    skilllevel: str
    price: str
    duration: str
    description: str

class CourseCreate(CourseBase):
    pass

class Course(CourseBase):
    id: int
    month_id: int
    completed: bool

    class Config:
        orm_mode = True

class MonthBase(BaseModel):
    month: str
    overview: str

class MonthCreate(MonthBase):
    courses: List[CourseCreate]

class Month(MonthBase):
    id: int
    roadmap_id: int
    courses: List[Course]

    class Config:
        orm_mode = True

class RoadmapBase(BaseModel):
    summary: str

class RoadmapCreate(RoadmapBase):
    roadmap: List[MonthCreate]

class Roadmap(RoadmapBase):
    id: int
    user_id: int
    created_at: datetime
    roadmap: list[Month]

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    roadmaps: List[Roadmap]

    class Config:
        orm_mode = True