const {DbContext} = require("../models")

exports.login = async (req, res) => {
    try{
        let body = req.body;
        let admin = await DbContext.Admin.findOne({where: body});
        res.json({code: 200, result: admin})
    }catch(err){
        res.json({code: 400, result: null, error: err.message})
    } 
}


exports.signup = async (req, res) => {
    try{
        let body = req.body;
        // body validation
        let admin = await DbContext.Admin.create(body);
        res.json({code: 200, result: admin})
    }catch(err){
        res.json({code: 400, result: null, error: err.message})
    }
}