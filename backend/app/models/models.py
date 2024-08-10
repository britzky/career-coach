from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from ..database import Base 

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    roadmaps = relationship("Roadmap", back_populates="user")

class Roadmap(Base):
    __tablename__ = 'roadmap'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    summary = Column(String)
    created_at = Column(DateTime, server_default=func.now())
    user = relationship("User", back_populates="roadmaps")
    months = relationship("Month", back_populates="roadmap")

class Month(Base):
    __tablename__ = 'month'
    id = Column(Integer, primary_key=True)
    roadmap_id = Column(Integer, ForeignKey('roadmap.id'))
    month = Column(String)
    overview = Column(String)
    roadmap = relationship("Roadmap", back_populates="months")
    courses = relationship("Course", back_populates="month")

class Course(Base):
    __tablename__ = 'course'
    id = Column(Integer, primary_key=True)
    month_id = Column(Integer, ForeignKey('month.id'))
    coursename = Column(String)
    link = Column(String)
    skilllevel = Column(String)
    price = Column(String)
    duration = Column(String)
    description = Column(String)
    completed = Column(Boolean, default=False)
    month = relationship("Month", back_populates="courses")    

