const express = require("express")
const { APP } = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

require("./requests/admin")(app);
require("./requests/category")(app);
require("./requests/product")(app);
require("./requests/productTasteProfile")(app);
require("./requests/tasteProfile")(app);
require("./requests/order")(app);
require("./requests/paymentMethod")(app);

app.get(APP.BASE, (req, res) => {
    res.json("Server is alive!");
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}...`);
});