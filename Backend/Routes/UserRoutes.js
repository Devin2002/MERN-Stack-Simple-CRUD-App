//mulinma experss js eka modeal eka conntroller eka  input karaganna oona
const express = require('express');
const router = express.Router();

//Insert Model 
const User = require('../Model/UserModel');

//Insert Controller
const UserController = require('../Controllers/UserControllers');

//Insert Routes
router.get('/', UserController.getAllUsers); // Get all users
router.post('/', UserController.addUser); // Get all users
router.get('/:id', UserController.getById); // Get user by ID
router.put('/:id', UserController.updateUser); // Update user details
router.delete('/:id', UserController.deleteUser); // Update user details

//export
module.exports = router; // Export the router to be used in app.js
