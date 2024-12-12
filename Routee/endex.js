


const express=require("express");

const app=express();
const port=8080;
const studentRoutes=require("../Route/studentRoutes")

const teachers=require("../Route/teacherRoutes");

app.use("/students", studentRoutes)

app.use("/teachers", teachers);

app.listen(port, ()=>{
    console.log("Port on 8080");
})