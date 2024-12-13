

// const express=require("express");

// const app=express();
// const port=8080;

// const stuRoute=require("./Rout/studentRoutes")

// app.use("/students",stuRoute);



// app.listen(port,()=>{
//     console.log(`server run on ${port}`);
// })



const express=require("express");

const app=express();
const EmpRoute=require("./Rout/empRoutes");
const port=8000;

app.set("view engine", "ejs");


app.use("/", EmpRoute);

app.listen(port,()=>{
    console.log(`Server on ${port}`);
})