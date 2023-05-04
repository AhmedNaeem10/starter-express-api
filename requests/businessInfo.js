const { BUSINESS_INFO } = require("../routes");
const { addBusinessInfo, getBusinessInfo, deleteBusinessInfo, updateBusinessInfo, getCurrentBusinessInfo } = require("../controllers/businessInfoController");
const multer  = require('multer');
const upload = multer({ dest: "./images/businessInfos" });


module.exports = function (app) {
    app.post(BUSINESS_INFO.ADD_BUSINESS_INFO, upload.single('file'), addBusinessInfo)
    app.get(BUSINESS_INFO.GET_BUSINESS_INFO, getBusinessInfo)
    app.get(BUSINESS_INFO.GET_CURRENT_BUSINESS_INFO, getCurrentBusinessInfo)
    app.delete(BUSINESS_INFO.DELETE_BUSINESS_INFO, deleteBusinessInfo)
    app.put(BUSINESS_INFO.UPDATE_BUSINESS_INFO, updateBusinessInfo)
}
