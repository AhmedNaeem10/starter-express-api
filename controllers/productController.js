const { DbContext } = require("../models");
const fs = require("fs");
const { addAddOnsToProduct } = require("./addOnController");
const { addTasteProfilesToProduct } = require("./ProductTasteProfile");

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
        if (await addAddOnsToProduct(product.product_id, body.addons.split(",").map(x => parseInt(x)))) {
            if (await addTasteProfilesToProduct(product.product_id, body.tasteProfiles.split(",").map(x => parseInt(x)))) {
                res.json({ code: 200, result: product });
            } else {
                throw new Error();
            }
        } else {
            throw new Error();
        }
    } catch (err) {
        res.json({ code: 400, error: err.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await DbContext.Product.findOne({ where: { product_id: id }, include: [DbContext.Category, DbContext.AddOn, DbContext.TasteProfile] });
        let imageData = fs.readFileSync(product.image, "base64");
        product["image"] = imageData;
        if (product.AddOns.length > 0) {
            for (let y = 0; y < product.AddOns.length; y++) {
                let imageData = fs.readFileSync(product.AddOns[y].image, "base64");
                product.AddOns[y]["image"] = imageData
            }
        }
        if (product.TasteProfiles.length > 0) {
            for (let y = 0; y < product.TasteProfiles.length; y++) {
                let imageData = fs.readFileSync(product.TasteProfiles[y].image, "base64");
                product.TasteProfiles[y]["image"] = imageData
            }
        }
        res.json({ code: 200, result: product });
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        let products = await DbContext.Product.findAll({ include: [DbContext.Category, DbContext.AddOn, DbContext.TasteProfile] });
        for (let x = 0; x < products.length; x++) {
            let imageData = fs.readFileSync(products[x].image, "base64");
            products[x]["image"] = imageData
            if (products[x].AddOns.length > 0) {
                for (let y = 0; y < products[x].AddOns.length; y++) {
                    let imageData = fs.readFileSync(products[x].AddOns[y].image, "base64");
                    products[x].AddOns[y]["image"] = imageData
                }
            }
            if (products[x].TasteProfiles.length > 0) {
                for (let y = 0; y < products[x].TasteProfiles.length; y++) {
                    let imageData = fs.readFileSync(products[x].TasteProfiles[y].image, "base64");
                    products[x].TasteProfiles[y]["image"] = imageData
                }
            }
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
            if (addAddOnsToProduct(id, body.addons.split(",").map(x => parseInt(x)))) {
                if (await addTasteProfilesToProduct(id, body.tasteProfiles.split(",").map(x => parseInt(x)))) {
                    res.json({ code: 200, result: product[0] });
                } else {
                    throw new Error();
                }
            } else {
                throw new Error();
            }
        } else {
            const product = await DbContext.Product.update(body_, { where: { product_id: id } });
            if (await addAddOnsToProduct(id, body.addons.split(",").map(x => parseInt(x)))) {
                if (await addTasteProfilesToProduct(id, body.tasteProfiles.split(",").map(x => parseInt(x)))) {
                    res.json({ code: 200, result: product[0] });
                } else {
                    throw new Error();
                }
            } else {
                throw new Error();
            }
        }
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getProductsByCategory = async (req, res) => {
    try {
        const { id } = req.params;
        let products = await DbContext.Product.findAll({ where: { category_id: id }, include: [DbContext.AddOn, DbContext.TasteProfile] });
        for (let x = 0; x < products.length; x++) {
            let imageData = fs.readFileSync(products[x].image, "base64");
            products[x]["image"] = imageData
            if (products[x].AddOns.length > 0) {
                for (let y = 0; y < products[x].AddOns.length; y++) {
                    let imageData = fs.readFileSync(products[x].AddOns[y].image, "base64");
                    products[x].AddOns[y]["image"] = imageData
                }
            }
            if (products[x].TasteProfiles.length > 0) {
                for (let y = 0; y < products[x].TasteProfiles.length; y++) {
                    let imageData = fs.readFileSync(products[x].TasteProfiles[y].image, "base64");
                    products[x].TasteProfiles[y]["image"] = imageData
                }
            }
        }
        res.json({ code: 200, result: products, error: null });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}