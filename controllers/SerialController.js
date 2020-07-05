var knex = require('../database/db');

const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');


async function gravarCSV(row) {
  try {
    await knex('seriais')
      .insert(row);
  } catch (error) {
    console.log(error);
  }
  return res.redirect('/seriais');
}


module.exports = {
  async index(req, res) {
    return res.render('seriais/seriais.html');
  },
  async store(req, res, next) {

    // console.log(req.body, req.file);

    try {
      fs.createReadStream(path.resolve(__dirname, '..', 'uploads', req.file.filename))
        .pipe(csv.parse({ headers: false }))
        .on('error', error => console.error(error))
        .on('data', async row => { await knex('seriais').insert(row) })
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