const { sequelize, DataTypes } = require('../db/dbConnection');
const { PaymentMethod } = require('./PaymentMethod');

exports.Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  datetime: {
    type: DataTypes.DATE
  },
  bill: {
    type: DataTypes.FLOAT
  },
  paymentMethod_id: {
    type: DataTypes.INTEGER,
    references: {
      // This is a reference to another model
      model: PaymentMethod,

      // This is the column name of the referenced model
      key: 'paymentMethod_id',
    }
  }
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});