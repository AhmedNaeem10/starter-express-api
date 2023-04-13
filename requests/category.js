const { CATEGORIES } = require("../routes");
const { getCategories, getSubCategories, addCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");
const multer  = require('multer');
const upload = multer({ dest: "./images/categories" });

module.exports = function (app) {
    app.get(CATEGORIES.GET_CATEGORIES, getCategories);
    app.get(CATEGORIES.GET_SUBCATEGORIES, getSubCategories);
    app.post(CATEGORIES.ADD_CATEGORY, upload.single('file'), addCategory);
    app.put(CATEGORIES.UPDATE_CATEGORY, updateCategory);
    app.delete(CATEGORIES.DELETE_CATEGORY, deleteCategory);
}