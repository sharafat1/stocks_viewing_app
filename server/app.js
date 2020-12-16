
/* This is the modules, packages, and libraries that are needed for this route*/
const createError = require("http-errors") //creating http-server
const express = require("express") //include exp app.
const path = require("path") // routing
const cookieParser = require("cookie-parser") //Cookies parser
const logger = require("morgan") //security
require("dotenv").config() // Environmnet var process.env.PORT sat from .env file. to allow the use of different ports instead of port 443.
const options = require("./database_files/knexfile.js") //database connectivity
const knex = require("knex")(options) //database connectivity
const cors = require("cors") //security
const swaggerUI = require('swagger-ui-express'); //include swaggeruiexp
const yaml = require('yamljs'); //include yamljs
const swaggerDocument = yaml.load('./swagger_docs/swagger.yaml'); //load swagger.yaml
const helmet = require("helmet") //security

// The routes
const indexRouter = require("./routes/stocks") //create a route
const usersRouter = require("./routes/user") //create a route

const app = express()  //create the app

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

//security for logins etc.
app.use(logger("common"))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

//using the Knex to connect to the DB
app.use((req, res, next) => {
  req.db = knex
  next()
})

//headers for a logger and token
logger.token("req", (req, res) => JSON.stringify(req.headers))
logger.token("res", (req, res) => {
  const headers = {}
  res.getHeaderNames().map((h) => (headers[h] = res.getHeader(h)))
  return JSON.stringify(headers)
})

app.use("/stocks", indexRouter) //route for the index router
app.use("/user", usersRouter) //route for the user router
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocument)) //route for the docs router

//Knex connecting to the DB and selecting raw version of data from the database
app.get("/knex", (req, res, next) => {
  req.db
    .raw("SELECT VERSION()")
    .then((version) => console.log(version[0][0]))
    .catch((err) => {
      console.log(err)
      throw err
    })
  res.send("Version logged successfully")
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
