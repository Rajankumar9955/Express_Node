

const express=require("express");

const app=express();
const port=8080;

const stuRoute=require("./Rout/studentRoutes")

app.use("/students",stuRoute);



app.listen(port,()=>{
    console.log(`server run on ${port}`);
})