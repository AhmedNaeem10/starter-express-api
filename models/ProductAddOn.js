const { sequelize, DataTypes } = require('../db/dbConnection');
const { AddOn } = require('./AddOn');
const { Product } = require('./Product');

exports.ProductAddOn = sequelize.define('ProductAddOn', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Product,
            key: 'product_id',
        }
    },
    addon_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: AddOn,
            key: 'addon_id',
        }
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});