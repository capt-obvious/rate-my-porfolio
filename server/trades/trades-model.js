const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development || process.env(DATABASE_URL));

module.exports = {
    find,
    findById,
    insert,
    findUserTrades
}

function find(){
    return db('trades');
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

function findUserTrades(userId){
    console.log(userId)
    return db('trades')
        .leftJoin('users', 'users.id', 'trades.user_id')
        .where({'trades.user_id': userId});
}