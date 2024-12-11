

const express=require("express");

const route=express.Router();

route.get("/teacherInfo", (req, res)=>{
    res.send("<h1>THis is teacherInfo</h1>")
})

module.exports=route;