const { DbContext } = require("../models");
const { Category } = require("../models/Category");
const { ProductTasteProfile } = require("../models/ProductTasteProfile");

exports.addProduct = async (req, res) => {
    try {
        const body = req.body;
        const product = await DbContext.Product.create(body);
        res.json({ code: 200, result: product })
    } catch (err) {
        res.json(err.message);
    }
}

exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await DbContext.Product.findOne({ include: { model: DbContext.TasteProfile } }, { where: { product_id: id } });
        res.json({ code: 200, result: product, error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await DbContext.Product.findAll();
        res.json({ code: 200, result: products, error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await DbContext.Product.destroy({ where: { product_id: id } });
        res.json({ code: 200, result: product, error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await DbContext.Product.update(body, { where: { product_id: id } });
        res.json({ code: 200, result: product[0], error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getProductsByCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const products = await DbContext.Product.findAll(body, { where: { category_id: id } });
        res.json({ code: 200, result: products, error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}