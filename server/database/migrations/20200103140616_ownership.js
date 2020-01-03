
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('ownership', tbl => {
        tbl.primary('user_id', 'trades_id');

        tbl.integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tickets");

    tbl.integer("trades_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("employees");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ownership");
};
