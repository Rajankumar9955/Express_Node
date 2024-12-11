


const express=require("express");

const app=express();
const port=8080;
const studentRoutes=require("./Route/studentRoutes")



app.use("/students", studentRoutes)

app.listen(port, ()=>{
    console.log("Port on 8080");
})