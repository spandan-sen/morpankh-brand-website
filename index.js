const express = require("express")
const app = require("./app")  // import the configured app
const chalk = require("chalk")

const server = app.listen(3000, () => {
    console.log(chalk.green("------------------------------"))
    console.log(chalk.green("Server started on port : 3000"))
    console.log(chalk.green("------------------------------"))
})
server.on("error", (err) => {
    console.log(chalk.red(`Error: ${err.message}`))
})