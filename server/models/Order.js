const { DataTypes } = require('sequelize');
const db = require('../db');

const Order = db.sequelize.define(
 'Order', 
 {
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
  },
  },
  {}
);

module.exports = Order;
