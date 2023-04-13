const { sequelize, DataTypes } = require('../db/dbConnection');

exports.Category = sequelize.define('Category', {
  category_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  parentCategory: {
    type: DataTypes.INTEGER,
    references: {
      model: this.Category,
    }
  }
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});