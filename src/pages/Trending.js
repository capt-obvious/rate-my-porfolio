/* global fetch */
import React from 'react'
import styled from 'styled-components'
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap'
import { TrendingContainer } from '../components/Containers'
import { Header1 } from '../components/Headers'

const SECRET_API_KEY = '7XJ0DGZYNBCMWHJ9'

const FullListGroupItem = styled(ListGroupItem)`
  width: 10em;
`

const Trending = () => {
  const [loading, setLoading] = React.useState(false)
  const [trending, setTrending] = React.useState([])

  const fetchTrendingStocks = (ticker) => {
    return fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${SECRET_API_KEY}`, {
      method: 'GET'
    }).then((response) => response.json())
      .then((result) => {
        console.log({ result })
        const quote = result['Global Quote']
        if (quote) {
          const formattedTrend = {
            symbol: quote['01. symbol'],
            price: quote['05. price'],
            change: quote['10. change percent']
          }
          setTrending((prevTrending) => [ ...prevTrending, formattedTrend ])
        }
      })
  }

  React.useEffect(() => {
    setLoading(true)
    Promise.all([
      fetchTrendingStocks('MSFT'),
      fetchTrendingStocks('AAPL'),
      fetchTrendingStocks('TSLA'),
      fetchTrendingStocks('ADBE'),
      fetchTrendingStocks('BAC')
    ]).then(() => {
      setLoading(false)
    })
  }, [])
  console.log({ trending })
  return loading ? <Spinner color='primary' /> : <TrendingContainer>
    <Header1>Top Trending Stocks</Header1>
    {trending.length ? trending.map((trend) =>
      <ListGroup key={trend.symbol} horizontal>
        <FullListGroupItem color='info'>{trend.symbol}</FullListGroupItem>
        <FullListGroupItem>{`$${trend.price}`}</FullListGroupItem>
        <FullListGroupItem color={trend.change[0] === '-' ? 'danger' : 'success'}>{trend.change}</FullListGroupItem>
      </ListGroup>) : <Header1>{'No Trending Stocks Right Now!'}</Header1>}
  </TrendingContainer>
}

export default Trending
