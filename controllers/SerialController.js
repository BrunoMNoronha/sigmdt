var knex = require('../database/db');

const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');


module.exports = {
  async index(req, res) {
    return res.render('seriais/seriais.html', { id: req.query.id_produto });
  },
  async store(req, res, next) {

    console.log(req.body, req.file);

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



    return res.send('ok');

    // try {
    //   await knex('seriais')
    //     .insert(req.body);
    // } catch (error) {
    //   next(error);
    // }
    // return res.redirect('/seriais');
  },
  async cadastro(req, res) {
    return res.render('seriais/seriais-cadastro.html');
  }
}