const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    email: {
        type: String
    },
    fullName: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    units: {
        type: String
    },
    urgency: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    hospital: {
        type: String
    },
    contactNo: {
        type: String
    },
    instructions: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Number,
        // default: Date.now()
    },
    relation: {
        type: String
    }
})

const Posts = mongoose.model('Posts', PostSchema)
module.exports = Posts