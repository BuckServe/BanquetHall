const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: [true, 'Please enter customer full name'],
        maxLength: [50, 'Your name cannot exceed 100 characters'],
    },
    customerPhoneNumber: {
        type: String,
        required: [true, 'Please enter customer phone number.'],
        maxLength: [50, 'Your name cannot exceed 12 characters'],
    },
    customerCNIC: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [50, 'Your name cannot exceed 50 characters'],
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    hallId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hall',
        required: true,
    },
    advanceAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    eventDate: { type: Date, required: true },
    eventTime: {
        type: String,
        required: true,
        enum: ['day', 'night'],
    },
})

module.exports = mongoose.model('Booking', bookingSchema)
