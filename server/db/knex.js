const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
console.log('This is the knex object:', require('knex')(config));
module.exports = require('knex')(config);
