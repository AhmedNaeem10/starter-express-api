const { sequelize, DataTypes } = require('../db/dbConnection');

exports.BusinessInfo = sequelize.define('BusinessInfo', {
  businessInfo_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  allergens: {
    type: DataTypes.STRING
  },
  about: {
    type: DataTypes.STRING
  },
  termsOfSale: {
    type: DataTypes.STRING
  },
  ingredients: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});