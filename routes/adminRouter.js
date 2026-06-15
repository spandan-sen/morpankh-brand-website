const express = require("express")
const router = express.Router()
const chalk = require("chalk")

router.get("/home",(req,res)=>{
    try{
        res.render("home")

    }catch(err){
        console.log(err)

    }
})

//Exports
module.exports = router