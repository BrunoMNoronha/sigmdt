var knex = require('../database/db');

module.exports = {
	async index(req, res) {
		// const results = await knex('caixa');
		return res.render('financeiro/financeiro.html');
	},
	async store(req, res, next) {
		try {
			await knex('financeiro')
				.insert(req.body);
		} catch (error) {
			next(error);
		}
		return res.redirect('/financeiro');
	},
	async update(req, res, next) {
		try {
			await knex('financeiro')
				.where('id', '=', req.params.id)
				.update(req.doby);
		} catch (error) {
			next(error);
		}
		return res.redirect('/financeiro');
	},
	async delete(req, res, next) {
		try {
			await knex('financeiro')
				.where('id', '=', req.params.id)
				.del();
		} catch (error) {
			next(error);
		}
		return res.redirect('/financeiro');
	},
	async cadastro(req, res) {
		return res.render('financeiro/financeiro-cadastro.html');
	}
}