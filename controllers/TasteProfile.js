const { DbContext } = require("../models")
const fs = require("fs");

exports.addTasteProfile = async (req, res) => {
    try {
        const body = req.body;
        const file = req.file;
        const tasteProfile = await DbContext.TasteProfile.create({ ...body, image: file.path });
        res.json({ code: 200, result: tasteProfile });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.deleteTasteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const tasteProfile = await DbContext.TasteProfile.destroy({ where: { tasteProfile_id: id } })
        res.json({ code: 200, result: tasteProfile });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.deleteTasteProfiles = async (req, res) => {
    try{
        const {tasteProfiles} = req.body;
        const deletedTasteProfiles = await DbContext.TasteProfile.destroy({ where: { tasteProfile_id: tasteProfiles } })
        res.json({ code: 200, result: "success" });
    }catch(err){
        res.json({ code: 400, error: err.message })
    }
}

exports.updateTasteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const body_ = {
            title: body.title,
        }
        const file = req.file;
        if (file) {
            const tasteProfile = await DbContext.TasteProfile.update({ ...body_, image: file.path }, { where: { tasteProfile_id: id } });
            res.json({ code: 200, result: tasteProfile[0] });
        } else {
            const tasteProfile = await DbContext.TasteProfile.update(body_, { where: { tasteProfile_id: id } });
            res.json({ code: 200, result: tasteProfile[0] });
        }
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getTasteProfiles = async (req, res) => {
    try {
        let tasteProfiles = await DbContext.TasteProfile.findAll();
        for (let x = 0; x < tasteProfiles.length; x++) {
            let imageData = fs.readFileSync(tasteProfiles[x].image, "base64");
            tasteProfiles[x]["image"] = imageData
        }
        res.json({ code: 200, result: tasteProfiles });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getTasteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        let tasteProfile = await DbContext.TasteProfile.findOne({ where: { tasteProfile_id: id } });
        let imageData = fs.readFileSync(tasteProfile.image, "base64");
        tasteProfile["image"] = imageData
        res.json({ code: 200, result: tasteProfile });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getTasteProfilesByProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        let tasteProfiles = await DbContext.ProductTasteProfile.findAll({ include: { model: DbContext.TasteProfile } }, { where: { product_id: product_id } });
        for (let x = 0; x < tasteProfiles.length; x++) {
            let imageData = fs.readFileSync(tasteProfiles[x].TasteProfile.image, "base64");
            tasteProfiles[x].TasteProfile["image"] = imageData
        }
        res.json({ code: 200, result: tasteProfiles });
    } catch (err) {
        res.json({ code: 400, error: err.message })
    }
}