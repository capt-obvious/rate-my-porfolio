exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();
    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
    users.string("name", 128);
    users.string("email", 128);
    users.date("date");
    users.string("address", 128);
    users.string("city", 128).notNullable();
    users.integer("zip", 5);
    users.string("country").notNullable();
    users.string("gender");
    users.date("dob", 12);
    users.blob("avatar");
    users.text("bio", 500);
    users.integer("portfolio-size");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
