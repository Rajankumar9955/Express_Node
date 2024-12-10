const express=require("express")

const app=express();

 app.get("/", (req,res)=>{
    res.send("THis is first app");
 })
  app.get("/about", (req,res)=>{
    res.send("this is About");
  })
  app.get("/gallery", (req,res)=>{
    res.send("this is gallery");
  })
  app.get("/photo/images", (req,res)=>{
    res.send("this is IMages");
  })

app.listen(8090,()=>{
    console.log("port run of 8090 port!");
})