const express = require('express');

const router = express.Router();

const restricted = require('../auth/authenticate-middleware');
const Trades = require('../trades/trades-model');

//POST /api/trades   add new trade 
router.post('/', restricted, (req, res) => {
    const tradeData = req.body;
    if(!tradeData.ticker || !tradeData.quantity){
        res.status(400).json({ errorMessage: "Please provide ticker and quantities for the trade."})
    }else {
    Trades.insert(tradeData)
        .then(tradeData => {
            res.status(201).json(tradeData);
        })
        .catch(error => {
            console.log("POST error /api/trades", error);
            res.status(500)
                .json({ error: "There was an error while saving the trade to the database"})
        });
    }
});

//GET api/trades/  get all trades by every user
router.get('/', restricted, (req, res) => {
    Trades.find(req.query)
        .then(trades => {
            if(trades){
                res.status(200).json(trades);
            }else{
                res.status(404).json({ message: "Error fetching trades."})
            }
        })
        .catch(error => {
            console.log("Error on GET api/trades/", error);
            res.status(500).json({error: "The trades could not be retrieved."})
        })
})
module.exports = router;