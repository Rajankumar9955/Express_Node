const express=require("express");

const route=express.Router();
const EmpControlller=require("../Controller/empController")

route.get("/",EmpControlller.empHOme)
route.get("/about",EmpControlller.empAbout);
route.get("/contact",EmpControlller.empContact)

module.exports=route;