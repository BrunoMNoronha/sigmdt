
exports.up = function (knex) {
    return knex.schema.createTable('produtos_categorias', function (table) {
      table.increments('id')
      table.date('nome')
      table.timestamps(true, true)
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('produtos_categorias')
  };