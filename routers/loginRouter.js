const express = require('express')
const request = require('request')
const querystring = require('querystring')

const User = require('../schemas/user')
const utils = require('./utils')

let loginRouter = express()

const redirect_uri =
  process.env.REDIRECT_URI ||
  'http://localhost:8888/login/callback'

loginRouter.get('/', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email user-top-read playlist-read-private playlist-read-collaborative user-read-recently-played user-read-currently-playing user-modify-playback-state user-read-playback-state user-follow-modify',
      redirect_uri
    }))
})

loginRouter.get('/callback', function(req, res) {
  const requestExtras = {
    form: {
      code: req.query.code || null,
      redirect_uri,
      grant_type: 'authorization_code'
    }
  }

  const getTokenRequest = utils.buildSpotifyRequest('https://accounts.spotify.com/api/token', requestExtras)
  console.log("Token Request: " + getTokenRequest);

  request.post(getTokenRequest, function(error, response, body) {
    var access_token = body.access_token

    let uri = process.env.FRONTEND_URI || 'http://localhost:3000'

    // const getUserRequest = utils.buildSpotifyRequest('https://api.spotify.com/v1/me', code, redirect_uri)
    // request.post(getUserRequest, (error, response, body) => {
    //   const spotifyUserId = body.id
    //   if (User.exists({ spotifyUserId })) {
    //     uri += '/account'
    //   } else {
    //     uri += '/home'
    //   }
    // })

    res.redirect(uri + '?access_token=' + access_token)
  })
})

module.exports = loginRouter