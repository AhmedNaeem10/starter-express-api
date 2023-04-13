const { sequelize, DataTypes } = require('../db/dbConnection');
const { Product } = require('./Product');
const { TasteProfile } = require('./TasteProfile');

exports.ProductTasteProfile = sequelize.define('ProductTasteProfile', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Product,
      key: 'product_id',
    }
  },
  tasteProfile_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: TasteProfile,
      key: 'tasteProfile_id',
    }
  },
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});