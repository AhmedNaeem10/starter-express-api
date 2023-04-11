const {sequelize, DataTypes} = require('../db/dbConnection');

exports.TasteProfile = sequelize.define('TasteProfile', {
    tasteProfile_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    image: {
        type: DataTypes.BLOB
      },
  }, {
    // Other options
  });