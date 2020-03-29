const knex = require('knex');
const conf = require('../../knexfile');
const envconf = process.env.NODE_ENV === 'test' ? conf.test : conf.development;

const connection = knex(envconf);

module.exports = connection;