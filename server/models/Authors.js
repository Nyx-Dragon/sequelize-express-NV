const { DataTypes } = require('sequelize');
const db = require('../db'); 

const Author = db.sequelize.define(
 'Author', 
 {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nacionality: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  },
  {}
);

module.exports = Author;
//El nombre de la const que lee Book debe ser 
//la misma que la lectura de la ruta
//del module.export