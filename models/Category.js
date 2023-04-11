const {sequelize, DataTypes} = require('../db/dbConnection');

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
        type: DataTypes.BLOB,
    },
    parentCategory: {
      type: DataTypes.INTEGER,
      references: {
        model: this.Category,
        key: 'category_id',
      }
    }
  }, {
    // Other options
  });