const {
    temp_delete,
    temp_put,
    temp_get,
    temp_post,
    modifier_temp
} = require('../controllers/tempController');
const express = require('express');
const router = express.Router();

router.get('/temp',temp_get);
router.post('/temp',temp_post);
router.delete('/temp/:id',temp_delete);
router.put('/temp/:id',temp_put);
router.get('/modifier_temp/:id',modifier_temp)


module.exports = router;