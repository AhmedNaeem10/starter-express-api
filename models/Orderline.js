const { sequelize, DataTypes } = require('../db/dbConnection');
const { Order } = require('./Order');
const { Product } = require('./Product');

exports.Orderline = sequelize.define('Orderline', {
  orderline_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.DATE
  },
  order_id: {
    type: DataTypes.FLOAT,
    references: {
      // This is a reference to another model
      model: Order,

      // This is the column name of the referenced model
      key: 'order_id',
    }
  },
  product_id: {
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