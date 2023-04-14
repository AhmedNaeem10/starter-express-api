const { TASTE_PROFILES } = require("../routes");
const { getTasteProfile, getTasteProfiles, addTasteProfile, updateTasteProfile, deleteTasteProfile, getTasteProfilesByProduct } = require("../controllers/TasteProfile");
const multer  = require('multer');
const upload = multer({ dest: "./images/tasteProfiles" });


module.exports = function(app) {
    app.get(TASTE_PROFILES.GET_TASTE_PROFILE, getTasteProfile);
    app.get(TASTE_PROFILES.GET_TASTE_PROFILES, getTasteProfiles);
    app.get(TASTE_PROFILES.GET_TASTE_PROFILES_BY_PRODUCT, getTasteProfilesByProduct);
    app.post(TASTE_PROFILES.ADD_TASTE_PROFILE, upload.single('file'), addTasteProfile);
    app.put(TASTE_PROFILES.UPDATE_TASTE_PROFILE, updateTasteProfile);
    app.delete(TASTE_PROFILES.DELETE_TASTE_PROFILE, deleteTasteProfile);
}
