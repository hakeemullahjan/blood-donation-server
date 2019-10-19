const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    email: {
        // required: true,
        unique: true,
        type: String
    },
    bloodGroup: {
        // required: true,
        type: String
    },
    password: {
        type: String,
        // required: true
    },
    createdAt: {
        type: Number,
        default: Date.now()
    }
})

const Users = mongoose.model('Users', UserSchema)
module.exports = Users