const express = require('express')
require('dotenv').config()

const loginRouter = require('./routers/loginRouter')

const app = express()

app.use('/login', loginRouter)

let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)