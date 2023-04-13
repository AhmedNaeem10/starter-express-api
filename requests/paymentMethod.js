const { PAYMENT_METHODS } = require("../routes");
const { addPaymentMethod, getPaymentMethod, getAllPaymentMethods, updatePaymentMethod, deletePaymentMethod } = require("../controllers/paymentMethodController");

module.exports = function(app){
    app.post(PAYMENT_METHODS.ADD_PAYMENT_METHOD, addPaymentMethod);
    app.get(PAYMENT_METHODS.GET_PAYMENT_METHOD, getPaymentMethod);
    app.get(PAYMENT_METHODS.GET_PAYMENT_METHODS, getAllPaymentMethods);
    app.put(PAYMENT_METHODS.UPDATE_PAYMENT_METHOD, updatePaymentMethod);
    app.delete(PAYMENT_METHODS.DELETE_PAYMENT_METHOD, deletePaymentMethod);
}