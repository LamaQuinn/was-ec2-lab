const express = require ('express')
const app = express()
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ac2a65f5cb904005b01a0b49bbedc067',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static(`${__dirname}/public`))
app.get('/api/cat',(req,res)=>{
    res.status(200).send('Best regards from Flavio the cat.')
})

app.listen(4000, ()=>console.log('Server running on 4000'))
