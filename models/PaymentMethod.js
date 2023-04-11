const {sequelize, DataTypes} = require('../db/dbConnection');

exports.PaymentMethod = sequelize.define('PaymentMethod', {
    paymentMethod_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
  }, {
    // Other options
  });