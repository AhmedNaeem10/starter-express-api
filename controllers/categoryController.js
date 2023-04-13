const { DbContext } = require("../models")
const fs = require("fs");

exports.addCategory = async (req, res) => {
    try{
        const body = req.body;
        const file = req.file;
        const category = await DbContext.Category.create({ ...body, image: file.path });
        res.json({ code: 200, result: category });
    }catch(err){
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.deleteCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const category = await DbContext.Category.destroy({where: {category_id: id}})
        res.json({ code: 200, result: category });
    }catch(err){
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.updateCategory = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const category = await DbContext.Category.update(body, {where: {category_id: id}});
        res.json({ code: 200, result: category[0] });
    }catch(err){
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getSubCategories = async (req, res) => {
    try{
        const {id} = req.params;
        let categories = await DbContext.Category.findAll({where: {parentCategory: id}})
        for (let x = 0; x < categories.length; x++) {
            let imageData = fs.readFileSync(categories[x].image, "base64");
            categories[x]["image"] = imageData
        }
        res.json({ code: 200, result: categories });
    }catch(err){
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getCategories = async (req, res) => {
    try {
        let categories = await DbContext.Category.findAll({where: {parentCategory: null}});
        for (let x = 0; x < categories.length; x++) {
            let imageData = fs.readFileSync(categories[x].image, "base64");
            categories[x]["image"] = imageData
        }
        res.json({ code: 200, result: categories });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}