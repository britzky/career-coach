from sqlalchemy import Column, Integer, String, ForeignKey, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

class Roadmap(Base):
    __tablename__ = 'roadmap'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    summary = Column(String)
    content = Column(JSON)
    user = relationship("User", back_populates="roadmaps")

User.roadmaps = relationship("Roadmap", order_by=Roadmap.id, back_populates="user")
