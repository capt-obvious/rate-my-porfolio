
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(posts) {
        posts.increments();
        posts.string('title', 128)
            .notNullable();
        posts.text('contents')
            .notNullable();
        posts.date('date');
        posts.time('time');
        posts.boolean('liked');
        posts.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
      })
      .createTable('comments', tbl => {
          tbl.increments();
          tbl.text('comment')
            .notNullable();
          tbl.integer('post_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('schemes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE'); 
      })
    };
    
    exports.down = function(knex) {
      return knex.schema
        .dropTableIfExists('comments')
        .dropTableIfExists('posts');
    };