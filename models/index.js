const { Product } = require('./Product');
const { Category } = require('./Category');
const { Order } = require('./Order');
const { Orderline } = require('./Orderline');
const { PaymentMethod } = require('./PaymentMethod');
const { TasteProfile } = require('./TasteProfile');

exports.DbContext = {
    Product, Category, Order, Orderline, PaymentMethod, TasteProfile
};