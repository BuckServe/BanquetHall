const mongoose = require('mongoose')

const hallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter hall name'],
        maxLength: [50, 'Your name cannot exceed 50 characters'],
    },
    capacity: {
        type: Number,
        required: [true, 'Please enter hall maximum capacity.'],
    },
})

module.exports = mongoose.model('Hall', hallSchema)
