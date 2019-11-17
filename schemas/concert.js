const mongoose = require('mongoose')
const Track = require('./track').schema
const User = require('./user').schema

const concertSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    playlistId: {
        type: String,
    },
    categoryIds: {
        type: [Number],
        required: true,
    },
    users: {
        type: [User],
        required: true,
        default: [],
    },
    djs: {
        type: [User],
        required: true,
        default: [],
    },
    currentDj: {
        type: User,
        required: true,
    },
    currentTrackIndex: {
        type: Number,
        required: true,
        default: 0,
    },
    currentTrack: {
        type: Track,
    }
})

module.exports = mongoose.model('Concert', concertSchema)