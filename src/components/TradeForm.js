import React from "react";
import {UserContext} from '../utils/Contexts.js'
import axios from 'axios'


// format date 
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var today = mm + '/' + dd + '/' + yyyy;
// done format date


const TradeForm = () => {
  const [trade, setTrade] = React.useState({});
  const {user, setUser} = React.useContext(UserContext);

  const handleChange = e => {
    setTrade({
      ...trade,
      [e.target.name]: e.target.value
    });
    console.log(trade);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const token = window.localStorage.getItem('token')
    console.log("trade object: ", trade);
    setUser({
      trades: [...user.trades, trade]
    })
    console.log(user)
    // useEffect to make axios call
    axios({
      'method': 'post',
      'url': 'http://localhost:3300/api/trades',
      'headers': {
        "Authorization": token,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      'data': {
        date: trade.date,
        ticker: trade.ticker,
        quantity: Number(trade.shares),
        price: Number(trade.price),
        'buy-sell': Boolean(trade.buysell === 'buy'),
        user_id: Number(user.id)
    }

      })
      .then(res => console.log({res}))


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ticker</label>
        <input
          type="text"
          name="ticker"
          value={trade.ticker}
          onChange={handleChange}
        ></input>

        <label>number of shares purchased</label>
        <input
          type="number"
          name="shares"
          value={trade.shares}
          onChange={handleChange}
        ></input>

        <label>date</label>
        <input
          type="date"
          name="date"
          value={trade.date}
          onChange={handleChange}
        ></input>

        <label>purchase price</label>
        <input
          type="number"
          name="price"
          value={trade.price}
          onChange={handleChange}
        ></input>

        <label>Buy</label>

        <input
          type="radio"
          name="buysell"
          value={"buy"}
          onChange={handleChange}
        ></input>

        <label>Sell</label>
        <input
          type="radio"
          name="buysell"
          value={"sell"}
          onChange={handleChange}
        ></input>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default TradeForm;
