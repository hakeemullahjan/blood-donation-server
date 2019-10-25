const express = require('express')
const router = express.Router()
const Posts = require('../models/Post.model')
const ObjectId = require('mongodb').ObjectId


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


router.post('/comment/:postId', async (req, res) => {
    const { comment, fullName, createdAt, email } = req.body
    const postId = req.params.postId

    const newComment = {
        _id: ObjectId(),
        fullName,
        comment,
        createdAt,
        email
    }

    Posts.updateOne({ _id: ObjectId(postId) }, {
        $push: { comments: newComment }
    }, function (err, result) {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ message: 'COMMENTED ON POST' })
        }
    })

})


router.post('/addvolunteer/:postId', async (req, res) => {
    const { fullName, bloodGroup, status, email, createdAt } = req.body
    const postId = req.params.postId

    // const post=await Posts.findOne({}) //find the user which clicked on volunteer button

    const addVolunteer = {
        _id: ObjectId(),
        fullName,
        status,
        email,
        bloodGroup,
        createdAt
    }

    Posts.updateOne({ _id: ObjectId(postId) }, {
        $push: { volunteers: addVolunteer }
    }, function (err, result) {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ message: 'VOLUNTEER ADDED' })
        }
    })

})



router.get('/getmyposts/:email', async (req, res) => {
    const email = req.params.email

    const posts = await Posts.find({ email }).sort({ _id: -1 })

    if (!posts) {
        return res.status(409).json({ message: "NO POSTS YET" })
    }

    res.status(200).json(posts)
})


router.post('/donated:postId', (req, res) => {

    // Posts.up

})

module.exports = router