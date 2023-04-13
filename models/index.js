const { Product } = require('./Product');
const { Category } = require('./Category');
const { Order } = require('./Order');
const { Orderline } = require('./Orderline');
const { PaymentMethod } = require('./PaymentMethod');
const { TasteProfile } = require('./TasteProfile');
const { Admin } = require("./Admin")
const { ProductTasteProfile } = require("./ProductTasteProfile")

// relationships
Category.hasMany(Product, {
    foreignKey: 'category_id'
});
Product.belongsTo(Category, {
    foreignKey: {
        name: 'category_id'
    }
});

Product.belongsToMany(TasteProfile, {
    through: 'ProductTasteProfile',
    foreignKey: {
        name: 'product_id'
    }
})

TasteProfile.belongsToMany(Product, {
    through: 'ProductTasteProfile',
    foreignKey: {
        name: 'tasteProfile_id'
    }
})




// combine models as a DbContext
exports.DbContext = {
    Product, Category, Order, Orderline, PaymentMethod, TasteProfile, Admin, ProductTasteProfile
};