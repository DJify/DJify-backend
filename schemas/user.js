const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: {
        type: String,
        required: false,
    },
    queuedSongIds: {
        type: [String],
        required: true,
        default: [],
    },
    spotifyUserId: {
        type: String,
        required: true,
    },
    totalEncores: {
        type: Number,
        required: true,
        default: 0,
    },
    totalBoots: {
        type: Number,
        required: true,
        default: 0,
    },
    wantsToDj: {
        type: Boolean,
        required: true,
        default: true,
    },
    spotifyControlsEnabled: {
        type: Boolean,
        required: true,
        default: true,
    }

})

module.exports = User