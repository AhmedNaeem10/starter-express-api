const { DbContext } = require("../models");
const fs = require("fs");

exports.addProduct = async (req, res) => {
    try {
        const body = req.body;
        const file = req.file;
        const product = await DbContext.Product.create({ ...body, image: file.path });
        res.json({ code: 200, result: product })
    } catch (err) {
        res.json({ code: 400, error: err.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await DbContext.Product.findOne({ where: { product_id: id } }, { include: { model: DbContext.TasteProfile } });
        console.log(product.product_id)
        let imageData = fs.readFileSync(product.image, "base64");
        product["image"] = imageData;
        res.json({ code: 200, result: product, error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        let products = await DbContext.Product.findAll();
        for (let x = 0; x < products.length; x++) {
            let imageData = fs.readFileSync(products[x].image, "base64");
            products[x]["image"] = imageData
        }
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
        const products = await DbContext.Product.findAll({ where: { category_id: id } });
        res.json({ code: 200, result: products, error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}