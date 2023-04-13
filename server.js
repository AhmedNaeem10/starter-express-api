const express = require("express")
const {PRODUCTS, ADMIN, APP, CATEGORIES, TASTE_PROFILES, PRODUCT_TASTE_PROFILE} = require("./routes");
const {addProduct, getProduct, getAllProducts, updateProduct, deleteProduct, getProductsByCategory} = require("./controllers/productController");
const {getCategories, getSubCategories, addCategory, updateCategory, deleteCategory} = require("./controllers/categoryController");
const {login, signup} = require("./controllers/adminController");
const { getTasteProfile, getTasteProfiles, addTasteProfile, updateTasteProfile, deleteTasteProfile } = require("./controllers/TasteProfile");
const { addTasteProfilesToProduct, getTasteProfilesToProduct } = require("./controllers/ProductTasteProfile");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get(APP.BASE, (req, res)=>{
    res.json("Server is alive!");
});

/** products */
app.get(PRODUCTS.GET_PRODUCT, getProduct);

app.get(PRODUCTS.GET_PRODUCTS, getAllProducts);

app.put(PRODUCTS.UPDATE_PRODUCT, updateProduct);

app.delete(PRODUCTS.DELETE_PRODUCT, deleteProduct);

app.post(PRODUCTS.ADD_PRODUCT, addProduct);

app.get(PRODUCTS.GET_PRODUCTS_BY_CATEGORY, getProductsByCategory);

/* admin */
app.post(ADMIN.LOGIN, login)

app.post(ADMIN.REGISTER, signup)

/* categories */

app.get(CATEGORIES.GET_CATEGORIES, getCategories);

app.get(CATEGORIES.GET_SUBCATEGORIES, getSubCategories);

app.post(CATEGORIES.ADD_CATEGORY, addCategory);

app.put(CATEGORIES.UPDATE_CATEGORY, updateCategory);

app.delete(CATEGORIES.DELETE_CATEGORY, deleteCategory);

/* taste profiles */

app.get(TASTE_PROFILES.GET_TASTE_PROFILE, getTasteProfile);

app.get(TASTE_PROFILES.GET_TASTE_PROFILES, getTasteProfiles);

app.post(TASTE_PROFILES.ADD_TASTE_PROFILE, addTasteProfile);

app.put(TASTE_PROFILES.UPDATE_TASTE_PROFILE, updateTasteProfile);

app.delete(TASTE_PROFILES.DELETE_TASTE_PROFILE, deleteTasteProfile);

/* product taste profile */

app.get(PRODUCT_TASTE_PROFILE.GET_PRODUCT_TASTE_PROFILE, getTasteProfilesToProduct);

app.post(PRODUCT_TASTE_PROFILE.ADD_PRODUCT_TASTE_PROFILE, addTasteProfilesToProduct);

app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}...`);
});