const express = require('express');
const router = express.Router();

router.use('/signup', require('./Signup'))
router.use('/login', require('./Login'))


module.exports = router;