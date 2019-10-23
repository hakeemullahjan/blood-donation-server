const express = require('express');
const router = express.Router();
const Users = require('../models/Users.model')
const verifyToken = require('../middleware/verifyToken')


router.post("/signup", (req, res) => {
    const user = req.body
    const newUser = new Users(user)

    newUser.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            if (err.code === 11000) {
                res.send({ message: 'USER ALREADY EXISTS' })
            } else {
                res.send({ message: err })
            }
        })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await Users.findOne({ email })

    if (!user) {
        return res.status(409).json({ message: 'NO USER FOUND' })
    }

    //check password
    const matchPassword = user.comparePassword(password);

    if (!matchPassword) {
        return res.status(409).json({ message: "INVALID PASSWORD" });
    }

    //generate token
    await user.generateToken();

    return res.send(user)
})


module.exports = router;