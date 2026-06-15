const express = require("express")
const chalk = require("chalk")
const app = express()
require("dotenv").config()

//Middleware

app.set("view engine","ejs")

//Security
const cors = require("cors")
app.use(cors())

//Body Parsers
app.use(express.json())
app.use(express.urlencoded())

//Compression
const compression = require("compression")
app.use(compression())

//Static File Serving
app.use(express.static("public"))

//session
const session = require("express-session")
app.use(session({
	name : "name",
	secret : process.env.SECRET,
	resave : false,
	rolling : true,
	cookie : {
		httpOnly : true,
		sameSite : "lax",
		secure : true,
		maxAge : 60*60*1000
}
}))

//Admin Router
app.use("/",require("./routes/adminRouter"))

//Export
module.exports = app
