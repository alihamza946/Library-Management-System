var express = require('express');
var router = express.Router();
const userController = require('../Controller/userController');

// CRUD for Users
router.post('/', validateUser, userController.createUser);
router.get('/:id',  validateUser,userController.getUser);
router.put('/:id', validateUser, userController.updateUser);
router.delete('/:id', validateUser, userController.deleteUser);

module.exports = router;
