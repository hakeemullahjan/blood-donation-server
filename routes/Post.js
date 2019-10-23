const express = require('express')
const router = express.Router()
const Posts = require('../models/Post.model')


router.post('/bloodrequirement', (req, res) => {
    const post = req.body

    const newPost = new Posts(post)

    newPost.save()
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.send({ message: err })
        })
})


router.get('/getall', async (req, res) => {
    const posts = await Posts.find().sort({ _id: -1 })

    if (!posts) {
        return res.status(409).json({ message: "NO POSTS YET" })
    }

    res.status(200).json(posts)
})


module.exports = router