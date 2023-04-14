const { sequelize, DataTypes } = require('../db/dbConnection');

exports.AddOn = sequelize.define('AddOn', {
  addon_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  },
  image: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});