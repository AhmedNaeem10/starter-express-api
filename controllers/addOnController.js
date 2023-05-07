const { DbContext } = require("../models")
const { sequelize } = require("../db/dbConnection");
const fs = require("fs");

exports.addAddOn = async (req, res) => {
    try {
        const body = req.body;
        const file = req.file;
        const addOn = await DbContext.AddOn.create({ ...body, image: file.path });
        res.json({ code: 200, result: addOn });
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}

exports.getAddOns = async (req, res) => {
    try {
        let addOns = await DbContext.AddOn.findAll();
        for (let x = 0; x < addOns.length; x++) {
            let imageData = fs.readFileSync(addOns[x].image, "base64");
            addOns[x]["image"] = imageData
        }
        res.json({ code: 200, result: addOns });
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}

exports.getAddOnsByProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        let addOns = await DbContext.ProductAddOn.findAll({ include: { model: DbContext.AddOn } } ,{ where: { product_id: product_id } });
        for (let x = 0; x < addOns.length; x++) {
            let imageData = fs.readFileSync(addOns[x].AddOn.image, "base64");
            addOns[x].AddOn["image"] = imageData
        }
        res.json({ code: 200, result: addOns });
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}

exports.addAddOnsToProduct = async (id, addons) => {
    // try {
        console.log(addons)
        return await sequelize.transaction(async (t) => {
            await DbContext.ProductAddOn.destroy({ where: { product_id: id } }, { transaction: t });
            for (let addon_id of addons) {
                await DbContext.ProductAddOn.create({ product_id: id, addon_id }, { transaction: t });
            }
            return true
        });
    // } catch (err) {
    //     return false;
    // }
}

exports.getAddOn = async (req, res) => {
    try {
        const { id } = req.params;
        let addOn = await DbContext.AddOn.findOne({ where: { addOn_id: id } })
        let imageData = fs.readFileSync(addOn.image, "base64");
        addOn["image"] = imageData;
        res.json({ code: 200, result: addOn });
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}

exports.updateAddOn = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const file = req.file;
        if(file){
            const addOn = await DbContext.AddOn.update({...body, image: file.path}, { where: { addOn_id: id } });
            res.json({ code: 200, result: addOn[0] });
        }else{
            const addOn = await DbContext.AddOn.update(body, { where: { addOn_id: id } });
            res.json({ code: 200, result: addOn[0] });
        } 
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}

exports.deleteAddOn = async (req, res) => {
    try {
        const { id } = req.params;
        const addOn = await DbContext.AddOn.destroy({ where: { addOn_id: id } })
        res.json({ code: 200, result: addOn });
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}

exports.deleteAddons = async (req, res) => {
    try{
        const {addons} = req.body;
        const deleted = await DbContext.AddOn.destroy({ where: { addOn_id: addons } })
        res.json({ code: 200, result: "success" });
    }catch(err){
        res.json({ code: 400, error: err.message })
    }
}