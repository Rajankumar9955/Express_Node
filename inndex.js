

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
const mongoose=require("mongoose");
const port=8000;

app.set("view engine", "ejs");
mongoose.connect("mongodb://127.0.0.1:27017/muskan").then(()=>
{
    console.log("DB Connent");
}
)


app.use("/", EmpRoute);

app.listen(port,()=>{
    console.log(`Server on ${port}`);
})