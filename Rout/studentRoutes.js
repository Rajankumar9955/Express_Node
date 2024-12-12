const express=require("express");
const route=express.Router();

const StuController=require("../Controller/studentController");

route.get("/stuhome",StuController.stuHOme)
route.get("/stusubject",StuController.stuSubject)
route.get("/sturesult",StuController.stuResult)
route.get("/stufees",StuController.stuFees)

module.exports=route;