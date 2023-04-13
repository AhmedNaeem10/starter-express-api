const { PRODUCT_TASTE_PROFILE } = require("../routes");
const { addTasteProfilesToProduct, getTasteProfilesToProduct } = require("../controllers/ProductTasteProfile");

module.exports = function (app) {
    app.get(PRODUCT_TASTE_PROFILE.GET_PRODUCT_TASTE_PROFILE, getTasteProfilesToProduct);
    app.post(PRODUCT_TASTE_PROFILE.ADD_PRODUCT_TASTE_PROFILE, addTasteProfilesToProduct);
}
