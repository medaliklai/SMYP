const {rendement, 
    suivi, 
    bulletin, 
    admin_home, 
    users,
    ajouter_user,
    modifier_user,
    ajouter_station,
    ajouter_culture,
    evapo,
    ajouter_evapo,
    modifier_evapo,
    ajouter_temp,
} = require('../controllers/pagesController');
const express = require('express');
const router = require( './authRoutes' );
const route = express.Router();

route.get('/rendement',rendement);
route.get('/suivi',suivi);
route.get('/bulletin',bulletin);
route.get('/dashboard',admin_home);
router.get('/users',users);
router.get('/modifier_user',modifier_user);
route.get('/ajouter_user',ajouter_user);
router.get('/ajouter_station', ajouter_station);
router.get('/ajouter_culture',ajouter_culture);
router.get('/ajouter_temp',ajouter_temp);
router.get('/ajouter_evapo',ajouter_evapo);


module.exports = route;