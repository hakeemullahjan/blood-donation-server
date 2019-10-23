const express = require('express');
const router = express.Router();

router.use('/users', require('./Users'))
router.use('/post', require('./Post'))

module.exports = router;