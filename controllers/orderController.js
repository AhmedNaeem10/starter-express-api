const { DbContext } = require("../models");
const { sequelize } = require("../db/dbConnection");

exports.addOrder = async (req, res) => {
    try {
        const body = req.body;
        const order = { datetime: body.datetime, bill: body.bill, paymentMethod_id: body.paymentMethod_id }
        const orderlines = body.orderlines;
        const result = await sequelize.transaction(async (t) => {
            const newOrder = await DbContext.Order.create(order, { transaction: t });
            for (let orderline of orderlines) {
                await DbContext.Orderline.create({...orderline, order_id: newOrder.order_id}, { transaction: t });
            }
            return newOrder;
        });
        res.json({ code: 200, result: result });
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}