const { DbContext } = require("../models")
const fs = require("fs");

exports.addBusinessInfo = async (req, res) => {
    try{
        const body = req.body;
        const file = req.file;
        const businessInfo = await DbContext.BusinessInfo.create({ ...body, image: file ? file.path : body.path });
        res.json({ code: 200, result: businessInfo });
    }catch(err){
        res.json({ code: 400, error: err.message })
    }
}

exports.getBusinessInfo = async (req, res) => {
    try{
        const {id} = req.params;
        let businessInfo = await DbContext.BusinessInfo.findOne({where: {businessInfo_id: id}})
        let imageData = fs.readFileSync(businessInfo.image, "base64");
        businessInfo["image"] = imageData;
        res.json({ code: 200, result: businessInfo });
    }catch(err){
        res.json({ code: 400, error: err.message })
    }
}

exports.getCurrentBusinessInfo = async (req, res) => {
    try{
        let businessInfos = await DbContext.BusinessInfo.findAll()
        let imageData = fs.readFileSync(businessInfos[businessInfos.length - 1].image, "base64");
        let businessInfo = {...businessInfos[businessInfos.length - 1].dataValues}
        businessInfo["path"] = businessInfos[businessInfos.length - 1].image;
        businessInfo["image"] = imageData;
        res.json({ code: 200, result: businessInfo });
    }catch(err){
        res.json({ code: 400, error: err.message })
    }
}

exports.updateBusinessInfo = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const businessInfo = await DbContext.BusinessInfo.update(body, {where: {businessInfo_id: id}});
        res.json({ code: 200, result: businessInfo[0] });
    }catch(err){
        res.json({ code: 400, error: err.message })
    }
}

exports.deleteBusinessInfo = async (req, res) => {
    try{
        const {id} = req.params;
        const businessInfo = await DbContext.BusinessInfo.destroy({where: {businessInfo_id: id}})
        res.json({ code: 200, result: businessInfo });
    }catch(err){
        res.json({ code: 400, error: err.message })
    }
}