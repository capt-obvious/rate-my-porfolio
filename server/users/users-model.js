const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development || process.env(DATABASE_URL));

module.exports = {
    add,
    findById,
    find,
    findBy,
    findByUserName,
    update,
    remove
};

function find(){
    return db('users').select('id', 'username', 'name', 'email', 'date', 'address', 'city', 'state', 'zip', 'country', 'gender', 'dob', 'avatar', 'bio', 'portfolio-size');
}

function findBy(filter){
    return db('users')
    .where(filter);
}


function findById(id){
    return db('users')
    .where({id})
    .first();
};

function findByUserName(username){
    return findBy({username}).first();
}

//C-UD functions

async function add(user){
    const [id] = await db('users')
    .insert(user, 'id')
    .returning('id');
    return findById(id); //do I need this line??
};

async function update(id, changes){
    return db('users')
    .where('id', id)
    .update(changes)
}

async function remove(id) {
    return db('users')
    .where('id', id)
    .del();
}