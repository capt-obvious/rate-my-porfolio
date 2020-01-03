
exports.up = function(knex) {
return knex.schema.createTable('trades', function(trades){
    trades.increments();
    trades.date('date');
    trades.time('time');
    trades.string('ticker')
        .notNullable();
    trades.integer('quantity')
        .notNullable();
    trades.decimal('price');
    trades.boolean('buy-sell');
    trades.string('broker', 128);
    trades.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('trades');
};
