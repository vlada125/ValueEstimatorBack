const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const bcrypt = require("bcryptjs")
const chalk = require('chalk')

const app = express()

// database
const { Role, User, sequelize } = require("./app/models")

// routes
const api = require("./app/routes")

var corsOptions = {
  origin: "*",
}

// Static path setting
app.use(express.static(path.join(__dirname, "/public")))

// Cors setting
app.use(cors(corsOptions))
app.use(cors())
app.options("*", cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,"
  )
  next()
})


// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "100mb", extended: true }))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }))

// routes
app.use("/api", api)

// frontend route
app.get("/*", cors(), (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// set port, listen for requests
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})


