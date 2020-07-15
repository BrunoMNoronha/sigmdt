var knex = require('../database/db');
const { join } = require('../database/db');

module.exports = {
	async index(req, res) {
		let totalCaixa = 0;
		let saidas = 0;
		let saida_mes = 0;
		let entradas = 0;
		let entrada_mes = 0;

		const now = new Date();
		let diaAtual = now.getDay();
		let mesAtual = now.getMonth() + 1;
		let anoAtual = now.getFullYear();

		const hoje = anoAtual + '-' + mesAtual + '-' + diaAtual;
		const { dataMin = '2020-01-01', dataMax = hoje, tipoMovimentacao } = req.body;

		if (tipoMovimentacao) {
			var select = await knex('financeiro').orderBy('data', 'desc')
				.whereBetween('data', [dataMin, dataMax])
				.where('movimentacao', tipoMovimentacao);
		} else {
			var select = await knex('financeiro').orderBy('data', 'desc')
				.whereBetween('data', [dataMin, dataMax])
		}

		const results = await knex('financeiro')

		if (mesAtual < 10) {
			mesAtual = "0" + mesAtual;
		}

		results.map(function (item) {

			if (item.movimentacao == "saida") {
				saidas += item.valor;
				if (item.data.includes(`${anoAtual}-${mesAtual}-`)) {
					saida_mes += item.valor;
				}
			}

			if (item.movimentacao == "entrada") {
				entradas += item.valor
				if (item.data.includes(`${anoAtual}-${mesAtual}-`)) {
					entrada_mes += item.valor;
				}
			}
		})

		totalCaixa = entradas - saidas;
		const totalCaixaFormatado = totalCaixa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		const entradaCaixaFormatado = entrada_mes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		const saidaCaixaFormatado = saida_mes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

		return res.render('financeiro/financeiro.html', { movimentacoes: select, saida_mes: saidaCaixaFormatado, entrada_mes: entradaCaixaFormatado, total_caixa: totalCaixaFormatado });
	},
	async store(req, res, next) {
		var novoValor = req.body.valor.replace('R$ ', '').replace('.', '').replace(',', '.');
		try {
			await knex('financeiro')
				.insert({
					data: req.body.data,
					valor: novoValor,
					descricao: req.body.descricao,
					movimentacao: req.body.movimentacao
				});
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