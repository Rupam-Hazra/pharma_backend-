const express = require("express");
const medicineController = require("../controllers/medicineController");
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');

router
    .route('/')
    .post( protect, medicineController.createMedicine)
    .get( protect,medicineController.getAllMedicines);

router
    .route('/:id')
    .get(medicineController.getMedicineById)
    .put( protect, restrictTo('admin', 'pharmacist'), medicineController.updateMedicine)
    .delete( protect, restrictTo('admin', 'pharmacist'), medicineController.deleteMedicine);

module.exports = router;