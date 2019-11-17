const express = require('express')
const request = require('request')


const User = require('../schemas/user')
const utils = require('./utils')

const userRouter = express.Router();

userRouter.route('/')
    .post((req, res) => {
        const { spotifyUserId, wantsToDj, username, avatarId } = req.body
        const user = User({
            spotifyUserId,
            wantsToDj,
            username,
        })
    })

userRouter.route('/:userId')

module.exports = userRouter