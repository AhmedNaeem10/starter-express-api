const { Product } = require('./Product');
const { Category } = require('./Category');
const { Order } = require('./Order');
const { Orderline } = require('./Orderline');
const { PaymentMethod } = require('./PaymentMethod');
const { TasteProfile } = require('./TasteProfile');
const { Admin } = require("./Admin")
const { ProductTasteProfile } = require("./ProductTasteProfile")
const { AddOn } = require("./AddOn")
const { ProductAddOn } = require("./ProductAddOn")
const { BusinessInfo } = require("./BusinessInfo")


// relationships
Category.hasMany(Category, {
    foreignKey: 'category_id',
});

Category.belongsTo(Category, {
    foreignKey: {
        name: 'parentCategory',
    },
    as: 'ParentCategory'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});
Product.belongsTo(Category, {
    foreignKey: {
        name: 'category_id'
    }
});

// AddOn.belongsToMany(Product, { foreignKey: { name: 'product_id' }, through: ProductAddOn });
// Product.belongsToMany(AddOn, { foreignKey: { name: 'addon_id' }, through: ProductAddOn })

// Product.belongsToMany(TasteProfile, { foreignKey: { name: 'tasteProfile_id' }, through: ProductTasteProfile });
// TasteProfile.belongsToMany(Product, { foreignKey: { name: 'product_id' }, through: ProductTasteProfile })

// TasteProfile.hasMany(ProductTasteProfile, {
//     foreignKey: 'tasteProfile_id'
// });

// ProductTasteProfile.belongsTo(TasteProfile, {
//     foreignKey: {
//         name: 'tasteProfile_id'
//     }
// });

Product.belongsToMany(AddOn, {
    through: 'ProductAddOn',
    foreignKey: 'product_id'
});

AddOn.belongsToMany(Product, {
    through: 'ProductAddOn',
    foreignKey: 'addon_id'
})

Product.belongsToMany(TasteProfile, {
    through: 'ProductTasteProfile',
    foreignKey: 'product_id'
})

TasteProfile.belongsToMany(Product, {
    through: 'ProductTasteProfile',
    foreignKey: 'tasteProfile_id'
})

// combine models as a DbContext
exports.DbContext = {
    Product,
    Category,
    Order,
    Orderline,
    PaymentMethod,
    TasteProfile,
    Admin,
    ProductTasteProfile,
    BusinessInfo,
    AddOn,
    ProductAddOn,
};