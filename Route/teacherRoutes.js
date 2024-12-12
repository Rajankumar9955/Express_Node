

const express=require("express");

const route=express.Router();

route.get("/teachername", (req, res)=>{
    res.send("<h1>THis is teacherInfo</h1>")
})

route.get("/teachersalary", (req, res)=>{
    res.send("<h1>THis is salary</h1>")
})

module.exports=route;