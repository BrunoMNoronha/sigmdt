var knex = require('../database/db');

module.exports = {
	async index(req, res) {
		const results = await knex('pedidos');
		return res.render('pedidos.html', { pedidos: results });
	},
	async store(req, res, next) {
		try {
			await knex('pedidos')
				.insert(req.body.descricao);
		} catch (error) {
			next(error);
		}
		return res.redirect('/pedidos');
	},
	async update(req, res, next) {
		try {
			await knex('pedidos')
				.where('id', '=', req.params.id)
				.update(req.doby);
		} catch (error) {
			next(error);
		}
		return res.redirect('/pedidos');
	},
	async delete(req, res, next) {
		try {
			await knex('pedidos')
				.where('id', '=', req.params.id)
				.del();
		} catch (error) {
			next(error);
		}
		return res.redirect('/pedidos');
	},
	async cadastro(req, res) {
		return res.render('pedidos-cadastro.html');
	},
	async accept(req, res, next) {
		try {
			await knex('pedidos')
				.where('id', '=', req.params.id)
				.update({ status: 'em andamento' })
		} catch (error) {
			next(error);
		}
		return res.redirect('/pedidos');
	},
	async done(req, res, next) {
		try {
			await knex('pedidos')
				.where('id', '=', req.params.id)
				.update({ status: 'concluido' })
		} catch (error) {
			next(error);
		}
		return res.redirect('/pedidos');
	}
}