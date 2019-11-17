const express = require('express')
require('dotenv').config()

const loginRouter = require('./routers/loginRouter')
const concertRouter = require('./routers/concertRouter')
const userRouter = require('./routers/userRouter')
const trackRouter = require('./routers/trackRouter')
const searchRouter = require('./routers/searchRouter')

const app = express()

app.use('/login', loginRouter)
app.use('/concert', concertRouter)
app.use('/user', userRouter)
app.use('/track', trackRouter)
app.use('/search', searchRouter)

// CORS workaround for demo
const cors = require('cors')
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      console.log(origin);
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)