const express = require('express');

const router = express.Router();

const restricted = require('../auth/authenticate-middleware');
const Trades = require('../trades/trades-model');

//POST /api/users/:id/trades   add new post 
router.post('/:id/trades', restricted, (req, res) => {
    const tradeData = req.body;
    if(!tradeData.ticker || !tradeData.ticker){
        res.status(400).json({ errorMessage: "Please provide ticker and quantities for the trade."})
    }else {
    Trades.insert(tradeData)
        .then(tradeData => {
            res.status(201).json(tradeData);
        })
        .catch(error => {
            console.log("POST error /api/users/:id/trades", error);
            res.status(500)
                .json({ error: "There was an error while saving the trade to the database"})
        });
    }
});
module.exports = router;