const {
    culture_delete,
    culture_put,
    culture_get,
    culture_post,
    modifier_culture
} = require('../controllers/cultureController');
const express = require('express');
const router = express.Router();

router.get('/culture',culture_get);
router.post('/culture',culture_post);
router.delete('/culture/:id',culture_delete);
router.put('/culture/:id',culture_put);
router.get('/modifier_culture/:id',modifier_culture)


module.exports = router;

