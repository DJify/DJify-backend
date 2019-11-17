const buildSpotifyRequest = (url, extras) => ({
    ...extras,
    url,
    headers: {
        'Authorization': 'Basic ' + (new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64'))
    },
    json: true
})

module.exports = {
    buildSpotifyRequest
}