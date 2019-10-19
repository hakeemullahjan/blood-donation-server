const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://blood:b16158031@cluster0-tugr0.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;