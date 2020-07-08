var knex = require('../database/db');

module.exports = {
	async index(req, res) {
		let total_caixa = 0;
		let saidas = 0;
		let saida_mes = 0;
		let entradas = 0;
		let entrada_mes = 0;

		let now = new Date();
		let mesAtual = now.getMonth()+1;

		const results = await knex('financeiro');
		
		if (mesAtual < 10) {
			mesAtual = "0"+mesAtual;
		}

		results.map(function(item) {

			if (item.movimentacao == "saida") {
				saidas += item.valor;
				if (item.data.includes(`-${mesAtual}-`)) {
					saida_mes += item.valor;
				}
			}

			if (item.movimentacao == "entrada") {
				entradas += item.valor
				if (item.data.includes(`-${mesAtual}-`)) {
					entrada_mes += item.valor;
				}
			}
		})

		total_caixa = entradas - saidas;
		
		return res.render('financeiro/financeiro.html', { movimentacoes: results, saida_mes, entrada_mes, total_caixa });
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