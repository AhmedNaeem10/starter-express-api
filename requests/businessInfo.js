const { BUSINESS_INFO } = require("../routes");
const { addBusinessInfo, getBusinessInfo, deleteBusinessInfo, updateBusinessInfo } = require("../controllers/businessInfoController");
const { getCategories, getSubCategories, addCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");
const multer  = require('multer');
const upload = multer({ dest: "./images/businessInfos" });


module.exports = function (app) {
    app.post(BUSINESS_INFO.ADD_BUSINESS_INFO, upload.single('file'), addBusinessInfo)
    app.get(BUSINESS_INFO.GET_BUSINESS_INFO, getBusinessInfo)
    app.delete(BUSINESS_INFO.DELETE_BUSINESS_INFO, deleteBusinessInfo)
    app.put(BUSINESS_INFO.UPDATE_BUSINESS_INFO, updateBusinessInfo)
}
