const { DbContext } = require("../models");

exports.addPaymentMethod = async (req, res) => {
    try {
        const body = req.body;
        const paymentMethod = await DbContext.PaymentMethod.create(body);
        res.json({ code: 200, result: paymentMethod })
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getPaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const paymentMethod = await DbContext.PaymentMethod.findByPk(id);
        res.json({ code: 200, result: paymentMethod })
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.getAllPaymentMethods = async (req, res) => {
    try {
        const paymentMethods = await DbContext.PaymentMethod.findAll();
        res.json({ code: 200, result: paymentMethods })
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.deletePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const paymentMethod = await DbContext.PaymentMethod.destroy({where: {paymentMethod_id: id}});
        res.json({ code: 200, result: paymentMethod })
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}

exports.updatePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const paymentMethod = await DbContext.PaymentMethod.update(body, {where: {paymentMethod_id: id}});
        res.json({ code: 200, result: paymentMethod[0] })
    } catch (err) {
        res.json({ code: 400, result: null, error: err.message })
    }
}
