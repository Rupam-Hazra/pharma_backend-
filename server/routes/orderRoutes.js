const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');

router.route('/')
    .get(protect, restrictTo('admin', 'pharmacist'), orderController.getOrders)
    .post(protect, restrictTo('user'), orderController.createOrder);

router.route('/:id')
    .get(protect, restrictTo('admin', 'pharmacist'), orderController.getOrderById)
    .put(protect, restrictTo( 'user'), orderController.updateOrder)
    .delete(protect, restrictTo('admin','pharmacist','user'), orderController.deleteOrder);

module.exports = router;