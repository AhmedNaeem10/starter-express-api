const { sequelize, DataTypes } = require('../db/dbConnection');

exports.Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});