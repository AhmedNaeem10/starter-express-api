const { CATEGORIES } = require("../routes");
const { getCategories, getSubCategories, addCategory, updateCategory, deleteCategory, getCategoriesIdAndTitle, getAllCategories, deleteCategories } = require("../controllers/categoryController");
const multer  = require('multer');
const upload = multer({ dest: "./images/categories" });

module.exports = function (app) {
    app.get(CATEGORIES.GET_CATEGORIES, getCategories);
    app.get(CATEGORIES.GET_SUBCATEGORIES, getSubCategories);
    app.get(CATEGORIES.GET_CATEGORIES_ID_TITLE, getCategoriesIdAndTitle);
    app.get(CATEGORIES.GET_ALL_CATEGORIES, getAllCategories);
    app.post(CATEGORIES.ADD_CATEGORY, upload.single('file'), addCategory);
    app.put(CATEGORIES.UPDATE_CATEGORY, upload.single('file'), updateCategory);
    app.delete(CATEGORIES.DELETE_CATEGORY, deleteCategory);
    app.post(CATEGORIES.DELETE_CATEGORIES, deleteCategories);
}