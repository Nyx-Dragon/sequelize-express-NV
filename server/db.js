const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pruebadb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const db = {};
db.sequelize = sequelize;

//El modules.exports del db es leido en models
module.exports = db;
