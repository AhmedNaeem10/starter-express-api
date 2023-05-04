const { ADD_ONS } = require("../routes");
const { addAddOn, getAddOn, deleteAddOn, updateAddOn, getAddOns, getAddOnsByProduct, addAddOnsToProduct, deleteAddons } = require("../controllers/addOnController");
const multer  = require('multer');
const upload = multer({ dest: "./images/addOns" });


module.exports = function (app) {
    app.post(ADD_ONS.ADD_ADD_ON, upload.single('file'), addAddOn)
    app.post(ADD_ONS.ADD_ADD_ONS_TO_PRODUCT, addAddOnsToProduct);
    app.post(ADD_ONS.DELETE_ADDONS, deleteAddons);
    app.get(ADD_ONS.GET_ADD_ON, getAddOn)
    app.get(ADD_ONS.GET_ADD_ONS, getAddOns)
    app.get(ADD_ONS.GET_ADD_ONS_BY_PRODUCT, getAddOnsByProduct)
    app.delete(ADD_ONS.DELETE_ADD_ON, deleteAddOn)
    app.put(ADD_ONS.UPDATE_ADD_ON, upload.single('file'), updateAddOn)
}
