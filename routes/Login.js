const express = require('express');
const router = express.Router();
const Users = require('../models/Signup.model')


router.post('/', async (req, res) => {
    const { email, password } = req.body
    const user = await Users.findOne({ email })

    if (!user) {
        return res.status(409).json({ message: 'No user found' })
    }

    if (password !== user.password) {
        return res.status(409).json({ message: "Invalid password" })
    }

    return res.send(user)

})








module.exports = router;