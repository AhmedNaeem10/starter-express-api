const { sequelize, DataTypes } = require('../db/dbConnection');
const { Product } = require('./Product');

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
  paymentMethod: {
    type: DataTypes.INTEGER,
    references: {
      // This is a reference to another model
      model: Product,

      // This is the column name of the referenced model
      key: 'product_id',
    }
  }
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});