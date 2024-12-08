const express = require('express');
const router = express.Router();
const adminController = require('../Controller/adminController');

// CRUD for Admin
router.post('/', adminController.createAdmin);
router.get('/:id', adminController.getAdmin);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
