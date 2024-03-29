
// Requiring and configuring the .env file to access its variables 
require("dotenv").config()
// Requiring express
const express = require('express')
// Creating the express server and storing inside the app variable
const app = express()
// Port in which the server will run on 
const PORT = process.env.PORT || 8000

const cors = require("cors")
// Requiring example router
const animals = require('./routes/Animals')
const keepers = require('./routes/Keepers')



// Configuring the server to accept and parse JSON data.
app.use(express.json())
app.use(cors());


// Connecting the router to the server
app.use('/animals', animals)
app.use('/keepers', keepers)

// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})