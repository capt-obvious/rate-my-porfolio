const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development || process.env(DATABASE_URL));

module.exports = {
    find,
    findById,
    insert,
}

function find(){
    return db('trades').select('id', 'date', 'time', 'ticker', 'quantity', 'price', 'buy-sell', 'broker', 'user_id')
}

function findById(id) {
    return db('trades')
        .where({id})
        .first();
  }

function insert(trade){
    return db('trades')
        .insert(trade, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        })
}