const express = require('express');
const router = express.Router();
const adminController = require('../Controller/adminController');

// CRUD for Admin
router.post('/', validateAdmin, adminController.createAdmin);
router.get('/:id', validateAdmin, adminController.getAdmin);
router.put('/:id', validateAdmin, adminController.updateAdmin);
router.delete('/:id', validateAdmin, adminController.deleteAdmin);

module.exports = router;
