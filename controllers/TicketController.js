var knex = require('../database/db');

module.exports = {
	async index(req, res) {
		const results = await knex('tickets');
		return res.render('tickets/tickets.html', { tickets: results });
	},
	async store(req, res, next) {
		try {
			await knex('tickets')
				.insert(req.body);
		} catch (error) {
			next(error);
		}
		return res.redirect('/tickets');
	},
	async update(req, res, next) {
		try {
			await knex('tickets')
				.where('id', '=', req.params.id)
				.update(req.doby);
		} catch (error) {
			next(error);
		}
		return res.redirect('/tickets');
	},
	async delete(req, res, next) {
		try {
			await knex('tickets')
				.where('id', '=', req.params.id)
				.del();
		} catch (error) {
			next(error);
		}
		return res.redirect('/tickets');
	},
	async cadastro(req, res) {
		return res.render('tickets/tickets-cadastro.html');
	},
	async accept(req, res, next) {
		try {
			await knex('tickets')
				.where('id', '=', req.params.id)
				.update({ status: 'em andamento' })
		} catch (error) {
			next(error);
		}
		return res.redirect('/tickets');
	},
	async done(req, res, next) {
		try {
			await knex('tickets')
				.where('id', '=', req.params.id)
				.update({ status: 'concluido' })
		} catch (error) {
			next(error);
		}
		return res.redirect('/tickets');
	}
}