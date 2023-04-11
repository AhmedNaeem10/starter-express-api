const { Category } = require('./Category');
const {sequelize, DataTypes} = require('../db/dbConnection');

exports.Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  price: {
    type: DataTypes.FLOAT
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.BLOB
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'category_id',
    }
  },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});