import React from "react";

const TradeForm = () => {
  const [trade, setTrade] = React.useState({});

  const handleChange = e => {
    setTrade({
      ...trade,
      [e.target.name]: e.target.value
    });
    console.log(trade);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("trade object: ", trade);

    // useEffect to make axios call

    return;
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
