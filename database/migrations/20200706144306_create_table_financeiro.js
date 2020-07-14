
exports.up = function (knex) {
    return knex.schema.createTable('financeiro', function (table) {
      table.increments('id')
      table.date('data')
      table.text('movimentacao')
      table.decimal('valor')
      table.text('descricao')
      table.timestamps(true, true)
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('financeiro')
  };