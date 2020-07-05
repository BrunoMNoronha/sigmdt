
exports.up = function (knex) {
  return knex.schema.createTable('seriais', function (table) {
    table.increments('id')
    table.text('numero')
    table.integer('produto_id')
      .references('produtos.id')
      .notNullable()
      .onDelete('CASCADE')
    table.timestamps(true, true)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('seriais')
};