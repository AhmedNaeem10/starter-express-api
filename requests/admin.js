const { ADMIN } = require("../routes");
const { login, signup } = require("../controllers/adminController");

module.exports = function (app) {
    app.post(ADMIN.LOGIN, login)
    app.post(ADMIN.REGISTER, signup)
}
