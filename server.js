const express = require("express")
const {ROUTES} = require("./routes");
const {addProduct} = require("./controllers/productController");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get(ROUTES.BASE, (req, res)=>{
    res.json("Server is alive!");
});

app.post(ROUTES.INSERT_PRODUCT, addProduct);

app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}...`);
});