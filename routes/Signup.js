const express = require('express');
const router = express.Router();
const Users = require('../models/Signup.model')


router.post("/", (req, res) => {
    const user = req.body
    const newUser = new Users(user)

    newUser.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send({ message: err })
        })
})

module.exports = router;