const {
    station_delete,
    station_put,
    station_get,
    station_post,
    modifier_station
} = require('../controllers/stationController');
const express = require('express');
const router = express.Router();

router.get('/stations',station_get);
router.post('/station',station_post);
router.delete('/station/:id',station_delete);
router.put('/station/:id',station_put);
router.get('/modifier_station/:id',modifier_station)


module.exports = router;

