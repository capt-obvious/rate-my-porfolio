#!/bin/usr/python

import yfinance as yf
import pandas as pd
import requests
import random
import sys

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import csv
import pandas as pd
from create_db import Trade, Base
from datetime import date, time, datetime


USER_ID = sys.argv[1]
BROKER = sys.argv[2]
TIME = '00:00:00'

TICKERS = 'AAPL FB GOOG MSFT TSLA'
START_DATE = '2019-01-01'
END_DATE = '2020-01-01'

data = yf.download(TICKERS, start=START_DATE, end=END_DATE)

STOCKS = [
            'AAPL', 
            'FB', 
            'GOOG', 
            'MSFT', 
            'TSLA'
        ]

portfolio = {
                "AAPL":0,
                "FB":0,
                "GOOG":0,
                "MSFT":0,
                "TSLA":0
            }

columns = [
            'ticker',
            'price',
            'quantity',
            'buy_sell',
            'date',
            'broker',
            'user_id',
            'time',
          ]

df = pd.DataFrame(columns=columns)

for i in range(250):
    this_stock = random.randrange(20)
    if this_stock < 5:
        ticker = STOCKS[this_stock]
        price = data.iloc[i,this_stock]
        quantity = random.randrange(1,10)*100
        action = 'BUY'
        date = data.index[i]
        if random.randrange(10) < 4:
            action = 'SELL'
            if quantity > portfolio[ticker]:
                quantity = portfolio[ticker]
            portfolio[ticker] = portfolio[ticker] - quantity
        else:
            portfolio[ticker] = portfolio[ticker] + quantity

        string_date = str(date.year) + '-' + str(date.month).zfill(2) + '-' + str(date.day).zfill(2)
        buy_sell = 0
        if action == 'BUY':
            buy_sell = 1
        input_trade = [ticker, price, quantity, buy_sell, date, BROKER, USER_ID, TIME]

        print(input_trade)

        df.loc[-1] = input_trade
        df.index = df.index + 1
        df = df.sort_index()

import sqlite3
conn = sqlite3.connect('dev.sqlite3')
df.to_sql('trades', conn, if_exists='replace')

