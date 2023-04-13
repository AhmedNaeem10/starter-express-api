const { PRODUCTS } = require("../routes");
const { addProduct, getProduct, getAllProducts, updateProduct, deleteProduct, getProductsByCategory } = require("../controllers/productController");
const multer  = require('multer');
const upload = multer({ dest: "./images/products" });

module.exports = function (app) {
    app.get(PRODUCTS.GET_PRODUCT, getProduct);
    app.get(PRODUCTS.GET_PRODUCTS, getAllProducts);
    app.put(PRODUCTS.UPDATE_PRODUCT, updateProduct);
    app.delete(PRODUCTS.DELETE_PRODUCT, deleteProduct);
    app.post(PRODUCTS.ADD_PRODUCT, upload.single('file'), addProduct);
    app.get(PRODUCTS.GET_PRODUCTS_BY_CATEGORY, getProductsByCategory);
}