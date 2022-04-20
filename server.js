const express = require('express')
const bodyparser = require('body-parser')
const res = require('express/lib/response')

// create express app
const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true}))

// parse requests of content-type - application/json
app.use(bodyparser.json())

// Configuring the database
const dbConfig = require('./config/config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// Connecting to the database
mongoose.connect( dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(() => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})

// define a simple route
app.get('/', ( req, res )  => {
    res.json({ "Message": "Welcome to EasyNotes App"})
})

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})