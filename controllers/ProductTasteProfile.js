const { DbContext } = require("../models")
const { sequelize } = require("../db/dbConnection");

exports.addTasteProfilesToProduct = async (id, tasteProfiles) => {
    try {
       await sequelize.transaction(async (t) => {
            await DbContext.ProductTasteProfile.destroy({where: {product_id: id}}, { transaction: t });
            for(let tasteProfile_id of tasteProfiles){
                await DbContext.ProductTasteProfile.create({product_id: id, tasteProfile_id}, { transaction: t });
            }
        });
        return true;
    } catch (err) {
        return false;
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


