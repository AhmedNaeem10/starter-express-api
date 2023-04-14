const { ORDERS } = require("../routes");
const { addOrder, getOrders } = require("../controllers/orderController");

module.exports = function(app){
    app.post(ORDERS.ADD_ORDER, addOrder);
    app.get(ORDERS.GET_ORDERS, getOrders);
}