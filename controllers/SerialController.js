var knex = require('../database/db');

const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');


module.exports = {
  async index(req, res) {
    const produto_id = req.query.id_produto;
    if (produto_id) {
      const results = await knex('seriais').where('produto_id', '=', produto_id);
      if (results) {
        return res.render('seriais/seriais.html', { seriais: results, id: produto_id });
      }
      return res.render('seriais/seriais.html', { seriais: '', id: produto_id });
    }
    const results = await knex('seriais');
    return res.render('seriais/seriais.html', { seriais: results });
  },
  async store(req, res, next) {
    try {
      fs.createReadStream(path.resolve(__dirname, '..', 'uploads', req.file.filename))
        .pipe(csv.parse({ headers: false }))
        .on('error', error => console.error(error))
        .on('data', async row => {
          await knex('seriais')
            .insert({ produto_id: req.body.produto_id, numero: row });

        })
        .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
    } catch (error) {
      console.error(error)
    }
    return res.redirect(`/seriais?id_produto=${req.body.produto_id}`);
  },
  async cadastro(req, res) {
    return res.render('seriais/seriais-cadastro.html');
  }
}