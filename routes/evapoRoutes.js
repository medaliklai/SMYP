const {
    evapo_delete,
    evapo_put,
    evapo_get,
    evapo_post,
    modifier_evapo
} = require('../controllers/evapoController');
const express = require('express');
const router = express.Router();

router.get('/evapo',evapo_get);
router.post('/evapo',evapo_post);
router.delete('/evapo/:id',evapo_delete);
router.put('/evapo/:id',evapo_put);
router.get('/modifier_evapo/:id',modifier_evapo)


module.exports = router;
