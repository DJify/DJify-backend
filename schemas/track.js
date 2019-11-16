const mongoose = require('mongoose')
const User = require('./user')

const Track = mongoose.Schema({
    startTime: {
        type: Date,
        default: Date.now,
    },
    upvoters: {
        type: [User],
        default: [],
    },
    downvoters: {
        type: [User],
        default: [],
    },
    isEncore: {
        type: Boolean,
        default: false,
    },
    queuedBy: {
        type: User,
        required: true,
    },
    spotifyTrackId: {
        type: String,
        required: true,
    },
})

module.exports = Track