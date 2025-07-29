const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyController');
const { protect } = require('../middleware/auth');

router
    .route('/')
    .get(protect, pharmacyController.getPharmacies)
    .post( protect, pharmacyController.createPharmacy);

router
    .route('/:id')
    .get(protect, pharmacyController.getPharmacyById)
    .put(protect, pharmacyController.updatePharmacy)
    .delete(protect, pharmacyController.deletePharmacy);




module.exports = router; 