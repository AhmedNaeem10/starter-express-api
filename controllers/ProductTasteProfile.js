const { DbContext } = require("../models")

exports.addTasteProfilesToProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { tasteProfiles } = req.body;
        await DbContext.ProductTasteProfile.destroy({where: {product_id: id}});
        for(let tasteProfile_id of tasteProfiles){
            await DbContext.ProductTasteProfile.create({product_id: id, tasteProfile_id});
        }
        res.json({code: 200, result: "success"})
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getTasteProfilesToProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let result = await DbContext.ProductTasteProfile.findAll({where: {product_id: id}})
        res.json({code: 200, result: result})
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}


