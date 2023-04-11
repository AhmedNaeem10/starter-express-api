const {DbContext} = require("../models")

exports.addProduct = async (req, res) => {
    try{
        const product = await DbContext.Product.create(req.body);
        res.json(product)
    }catch(err){
        res.json(err.message);
    }
}