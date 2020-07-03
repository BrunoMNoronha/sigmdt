
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table) {
        table.increments('id')
        table.text('codigo')
        table.text('descricao')
        table.text('categoria')
        table.text('data_compra')
        table.text('data_garantia')
        table.text('id_fornecedor')
        table.text('marca')
        table.text('modelo')
        table.text('estoque_atual')
        table.text('estoque_minimo')
        table.text('estoque_maximo')
        table.text('unidade_medida')
        table.text('valor')
        table.text('observacao')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('produtos')
  };