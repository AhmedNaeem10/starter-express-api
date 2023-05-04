const { DbContext } = require("../models")
const fs = require("fs");

exports.addCategory = async (req, res) => {
    try {
        const body = req.body;
        const file = req.file;
        const body_ = {
            parentCategory: parseInt(body.parentCategory) == -1 ? null : parseInt(body.parentCategory) ,
            title: body.title,
            description: body.description,
        }
        const category = await DbContext.Category.create({ ...body_, image: file.path, parentCategory: body_.parentCategory });
        res.json({ code: 200, result: category });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await DbContext.Category.destroy({ where: { category_id: id } })
        res.json({ code: 200, result: category });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.deleteCategories = async (req, res) => {
    try {
        const { categories } = req.body;
        const deleted = await DbContext.Category.destroy({ where: { category_id: categories } })
        res.json({ code: 200, result: "success" });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const file = req.file;
        const body_ = {
            id: parseInt(id),
            parentCategory: parseInt(body.parentCategory) == -1 ? null : parseInt(body.parentCategory) ,
            title: body.title,
            description: body.description,
        }
        if (file) {
            const category = await DbContext.Category.update({ ...body_, image: file.path, parentCategory: body_.parentCategory }, { where: { category_id: id } });
            res.json({ code: 200, result: category[0] });
        } else {
            const category = await DbContext.Category.update({...body, parentCategory: body_.parentCategory}, { where: { category_id: id } });
            res.json({ code: 200, result: category[0] });
        }
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getSubCategories = async (req, res) => {
    try {
        const { id } = req.params;
        let categories = await DbContext.Category.findAll({ where: { parentCategory: id } })
        for (let x = 0; x < categories.length; x++) {
            let imageData = fs.readFileSync(categories[x].image, "base64");
            categories[x]["image"] = imageData
        }
        res.json({ code: 200, result: categories });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getCategories = async (req, res) => {
    try {
        let categories = await DbContext.Category.findAll({ where: { parentCategory: null } });
        for (let x = 0; x < categories.length; x++) {
            let imageData = fs.readFileSync(categories[x].image, "base64");
            categories[x]["image"] = imageData
        }
        res.json({ code: 200, result: categories });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getAllCategories = async (req, res) => {
    try {
        let categories = await DbContext.Category.findAll({ include: { model: DbContext.Category, as: 'ParentCategory' } });
        for (let x = 0; x < categories.length; x++) {
            let imageData = fs.readFileSync(categories[x].image, "base64");
            categories[x]["image"] = imageData
        }
        res.json({ code: 200, result: categories });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getCategoriesIdAndTitle = async (req, res) => {
    try {
        let categories = await DbContext.Category.findAll({ attributes: ['category_id', 'title'] });
        res.json({ code: 200, result: categories });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}