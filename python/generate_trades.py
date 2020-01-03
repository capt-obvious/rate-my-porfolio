#!/bin/usr/python

import yfinance as yf
import pandas as pd
import requests
import random

TICKERS = 'AAPL FB GOOG MSFT TSLA'
STOCKS = ['AAPL', 'FB', 'GOOG', 'MSFT', 'TSLA']
START_DATE = '2019-01-01'
END_DATE = '2020-01-01'

data = yf.download(TICKERS, start=START_DATE, end=END_DATE)

STOCKS = ['AAPL', 'FB', 'GOOG', 'MSFT', 'TSLA']
portfolio = {
    "AAPL":0,
    "FB":0,
    "GOOG":0,
    "MSFT":0,
    "TSLA":0}

columns = [
        'ticker',
        'price',
        'volume',
        'action']

df = pd.DataFrame(columns=columns)

for i in range(250):
    this_int = random.randrange(20)
    if this_int < 5:
        ticker = STOCKS[this_int]
        price = data.iloc[i,this_int]
        volume = random.randrange(1,10)*100
        action = 'BUY' 
        if random.randrange(10) < 4:
            action = 'SELL'
            if volume > portfolio[ticker]:
                volume = portfolio[ticker]
            portfolio[ticker] = portfolio[ticker] - volume
        else:
            portfolio[ticker] = portfolio[ticker] + volume

        input_trade = [ticker, price, volume, action]
        df.loc[-1] = input_trade
        df.index = df.index + 1
        df = df.sort_index()
        print(ticker, price, volume, action, portfolio)

        for url in ['https://XXX.XXX.XXX.XXX']:
            try:
                response = requests.post(
                                            url,
                                            json={
                                                    'ticker':ticker,
                                                    'price':price,
                                                    'volume':volume,
                                                    'action':action}
                                        )
            except HTTPError as http_err:
                print(f'HTTP error has occurred: {http_err}')
            except Exception as err:
                print(f'Non-HTTP error has occurred: {err}')
            else:
                print('Success.')



# sql = {
#    'User'    : 'user',
#    'Pass'    : 'password',
#    'Address' : 'XXX.XXX.XXX.XXX',
#    'Port'    : 'XXXX',
#    'DB'      : 'database name',
#    'Table'   : 'table name'
#    }
    

# function to export dataframe to SQL database
# def exportDFtoSQL(dataframe: any, sql: Dict[str, str]):
    
    #sql = {'User'   : 'user',
    #    'Pass'      : 'password',
    #    'Address'   : 'XXX.XXX.XXX.XXX',
    #    'Port'      : 'XXXX',
    #    'DB'        : 'database name',
    #    'Table'     : 'table name'}
    
    # connect to SQL db
#    try:
#        engine = create_engine('mysql+mysqlconnector://'
#                +sql['User']+':'
#                +sql['Pass']+'@'
#                +sql['Address']+':'
#                +sql['Port']+'/'
#                +sql['DB'], echo=False)
#    except mysql.connector.Error as err:
#        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
#            logging.warning(errorcode.ER_ACCESS_DENIED_ERROR)
#            print("Wrong user name or password")
#        elif err.errno == errorcode.ER_BAD_DB_ERROR:
#            logging.warning(errorcode.ER_BAD_DB_ERROR)
#            print("Database does not exist")
#        else:
#            logging.warning(err)
#            print(err)
#    else:
#        logging.info('Connected to ' + sql['DB'])
#        print('Connected to ' + sql['DB'])
#
#    dataframe.to_sql(name=sql['Table'], con=engine, if_exists='replace')

# CREATE TABLE Errors (
# id int not null AUTO_INCREMENT,
# run_sample_id varchar(15),
# runid varchar(15),
# bip_version varchar(15),
# ticket varchar(15),
# PRIMARY KEY (id))
