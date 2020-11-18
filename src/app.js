const { json } = require('express')
const express = require('express')
const app = express()
require('../src/db/conn')
const route = require('../src/routers/router')
const port = process.env.PORT



// Parsing the datat which is comming form postman request
app.use(express.json())

// Router to use
app.use(route)

app.listen(port, () => {
    console.log(`server is up and running`,port)
})