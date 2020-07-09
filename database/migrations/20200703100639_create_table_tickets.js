
exports.up = function(knex) {
  return knex.schema.createTable('tickets', function(table) {
      table.increments('id')
      table.text('data')
      table.text('bloco')
      table.text('apt')
      table.text('prioridade')
      table.text('categoria')
      table.text('responsavel')
      table.text('status')
      table.text('descricao')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tickets')
};