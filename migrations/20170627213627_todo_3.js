exports.up = function(knex, Promise) {
  return knex.schema.table('todo', table => {
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('todo', table => {
    table.dropColumn('user_id');
  });
};
