

const express = require("express");
const route=express.Router();

route.get("/stuhome", (req,res)=>{
    res.send("<h1>This is home </h1>")
})
route.get("/fees", (req,res)=>{
    res.send("<h1>This is fees </h1>")
})
route.get("/class", (req,res)=>{
    res.send("<h1>This is class </h1>")
})
route.get("/name", (req,res)=>{
    res.send("<h1>This is name </h1>")
})

module.exports=route;