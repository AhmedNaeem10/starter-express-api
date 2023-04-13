const { Sequelize, DataTypes } = require('sequelize');
require("dotenv").config();

exports.DataTypes = DataTypes;

exports.sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT
});
