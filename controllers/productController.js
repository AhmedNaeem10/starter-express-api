const { DbContext } = require("../models");
const fs = require("fs");

exports.addProduct = async (req, res) => {
    try {
        const body = req.body;
        const file = req.file;
        const body_ = {
            price: parseFloat(body.price),
            quantity: parseInt(body.quantity),
            category_id: parseInt(body.category_id),
            title: body.title,
            description: body.description,
            active: body.active == 'true'
        }
        const product = await DbContext.Product.create({ ...body_, image: file.path });
        res.json({ code: 200, result: product })
    } catch (err) {
        res.json({ code: 400, error: err.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await DbContext.Product.findOne({ where: { product_id: id } });
        let imageData = fs.readFileSync(product.image, "base64");
        product["image"] = imageData;
        res.json({ code: 200, result: product });
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        let products = await DbContext.Product.findAll({ include: { model: DbContext.Category } });
        for (let x = 0; x < products.length; x++) {
            let imageData = fs.readFileSync(products[x].image, "base64");
            products[x]["image"] = imageData
        }
        res.json({ code: 200, result: products });
    } catch (err) {
        res.json({ code: 400, error: err.message })
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

exports.deleteProducts = async (req, res) => {
    try {
        const { products } = req.body;
        const deleted = await DbContext.Product.destroy({ where: { product_id: products } });
        res.json({ code: 200, result: "success" });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const file = req.file;
        const body_ = {
            id: id,
            price: parseFloat(body.price),
            quantity: parseInt(body.quantity),
            category_id: parseInt(body.category_id),
            title: body.title,
            description: body.description,
            active: body.active == 'true'
        }
        if (file) {
            const product = await DbContext.Product.update({ ...body_, image: file.path }, { where: { product_id: id } });
            res.json({ code: 200, result: product[0], error: null });
        } else {
            const product = await DbContext.Product.update(body_, { where: { product_id: id } });
            res.json({ code: 200, result: product[0], error: null });
        }
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getProductsByCategory = async (req, res) => {
    try {
        const { id } = req.params;
        let products = await DbContext.Product.findAll({ where: { category_id: id } });
        for (let x = 0; x < products.length; x++) {
            let imageData = fs.readFileSync(products[x].image, "base64");
            products[x]["image"] = imageData
        }
        res.json({ code: 200, result: products, error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}