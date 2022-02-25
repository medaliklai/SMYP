const express = require('express');
const {affiche_users} = require('../controllers/adminController');
const route = express.Router();

route.get('/admin/users', affiche_users);

module.exports = route;