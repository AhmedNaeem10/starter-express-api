const { DbContext } = require("../models")

exports.addTasteProfile = async (req, res) => {
    try{
        const body = req.body;
        const category = await DbContext.TasteProfile.create(body);
        res.json({ code: 200, result: category });
    }catch(err){
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.deleteTasteProfile = async (req, res) => {
    try{
        const {id} = req.params;
        const category = await DbContext.TasteProfile.destroy({where: {tasteProfile_id: id}})
        res.json({ code: 200, result: category });
    }catch(err){
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.updateTasteProfile = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const category = await DbContext.TasteProfile.update(body, {where: {tasteProfile_id: id}});
        res.json({ code: 200, result: category[0] });
    }catch(err){
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getTasteProfiles = async (req, res) => {
    try{
       
        const categories = await DbContext.TasteProfile.findAll();
        res.json({ code: 200, result: categories });
    }catch(err){
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getTasteProfile = async (req, res) => {
    try {
        const {id} = req.params;
        const categories = await DbContext.TasteProfile.findAll({where: {tasteProfile_id: id}});
        res.json({ code: 200, result: categories });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}