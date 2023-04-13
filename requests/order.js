const { ORDERS } = require("../routes");
const { addOrder } = require("../controllers/orderController");

module.exports = function(app){
    app.post(ORDERS.ADD_ORDER, addOrder);
}