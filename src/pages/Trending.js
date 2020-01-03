/* global fetch */
import React from 'react'
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap'
import { Header1 } from '../components/Headers'

const SECRET_API_KEY = '7XJ0DGZYNBCMWHJ9'

const Trending = () => {
  const [loading, setLoading] = React.useState(false)
  const [trending, setTrending] = React.useState([])

  const fetchTrendingStocks = (ticker) => {
    return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo`, {
      method: 'GET'
    }).then((response) => response.json())
      .then((result) => {
        const quote = result['Global Quote']
        const formattedTrend = {
          symbol: quote['01. symbol'],
          price: quote['05. price'],
          change: quote['10. change percent']
        }
        setTrending((prevTrending) => [ ...prevTrending, formattedTrend ])
      })
  }

  React.useEffect(() => {
    setLoading(true)
    Promise.all([
      fetchTrendingStocks('MSFT'),
      fetchTrendingStocks('APPL'),
      fetchTrendingStocks('TSLA'),
      fetchTrendingStocks('FB'),
      fetchTrendingStocks('NKE')
    ]).then(() => setLoading(false))
  }, [])

  return loading ? <Spinner color='primary' /> : <>
    <Header1>Top Trending Stocks</Header1>
    <ListGroup>
      {trending.map((trend, idx) => <ListGroupItem key={trend.symbol}>{`${trend.symbol} $${trend.price} ${trend.change}`}</ListGroupItem>)}
    </ListGroup>
  </>
}

export default Trending
