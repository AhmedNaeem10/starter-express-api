exports.APP = {
    BASE: "/",
}

exports.PRODUCTS = {
    ADD_PRODUCT: "/addProduct",
    DELETE_PRODUCT: "/deleteProduct/:id",
    UPDATE_PRODUCT: "/updateProduct/:id",
    GET_PRODUCT: "/product/:id",
    GET_PRODUCTS: "/products",
    GET_PRODUCTS_BY_CATEGORY: "/getProductsByCategory/:id"
}

exports.ADMIN = {
    LOGIN: "/adminLogin",
    REGISTER: "/adminRegister"
}

exports.CATEGORIES = {
    GET_CATEGORIES: "/categories",
    GET_SUBCATEGORIES: "/subcategories/:id",
    ADD_CATEGORY: "/addCategory",
    UPDATE_CATEGORY: "/updateCategory/:id",
    DELETE_CATEGORY: "/deleteCategory/:id"
}

exports.TASTE_PROFILES = {
    GET_TASTE_PROFILES: "/tasteProfiles",
    GET_TASTE_PROFILE: "/tasteProfile/:id",
    ADD_TASTE_PROFILE: "/addTasteProfile",
    UPDATE_TASTE_PROFILE: "/updateTasteProfile/:id",
    DELETE_TASTE_PROFILE: "/deleteTasteProfile/:id"
}

exports.PRODUCT_TASTE_PROFILE = {
    ADD_PRODUCT_TASTE_PROFILE: "/addProductTasteProfile/:id",
    GET_PRODUCT_TASTE_PROFILE: "/getProductTasteProfile/:id"
}