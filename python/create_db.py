import os
import sys
import datetime
from sqlalchemy import Boolean, Column, Float, ForeignKey, Integer, String, Date, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()

class Trade(Base):
    __tablename__ = 'trades'
    id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(Date)
    time = Column(Time)
    ticker = Column(String(128))
    quantity = Column(Integer)
    price = Column(Float)
    buy_sell = Column(Boolean)
    broker = Column(String(128))
    user_id = Column(Integer)

engine = create_engine('sqlite:///dev.sqlite3')
Base.metadata.create_all(engine)
