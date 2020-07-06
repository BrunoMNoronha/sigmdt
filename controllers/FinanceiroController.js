var knex = require('../database/db');

module.exports = {
	async index(req, res) {
		let total_caixa = 0;
		let saida_mes = 0;
		let entrada_mes = 0;
		const results = await knex('financeiro');
		
		// console.log(results)

		let now = new Date();
		var mesAtual = now.getMonth()+1;
		
		if (mesAtual < 10) {
			mesAtual = "0"+mesAtual;
		}

		results.map(function(item) {

			if (item.movimentacao == "saida" && item.data.includes(`-${mesAtual}-`)) {
				 saida_mes += item.valor;
			}
			if (item.movimentacao == "entrada" && item.data.includes(`-${mesAtual}-`)) {
				 entrada_mes += item.valor;
			}

			
		})

		total_caixa = entrada_mes - saida_mes;
		
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