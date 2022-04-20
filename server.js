const express = require('express')
const bodyparser = require('body-parser')
const res = require('express/lib/response')

const app = express()

app.use(bodyparser.urlencoded({ extended: true}))

app.use(bodyparser.json())

app.get('/', ( req, res )  => {
    res.json({ "Message": "Welcome to EasyNotes App"})
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})