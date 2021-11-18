const mongoose = require('mongoose')

const event = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    time: String,
    finished: Boolean
})

module.exports = event