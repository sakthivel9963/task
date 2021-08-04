const knex = require('knex');

const { attachPaginate } = require('knex-paginate');

const knexConfig = require('../knexfile');

const enviroment = process.env.NODE_ENV || 'development';

const connectionConfig = knexConfig[enviroment];

const connection = knex(connectionConfig);
attachPaginate();
module.exports = connection;
