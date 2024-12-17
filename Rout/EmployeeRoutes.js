

const express=require("express");
const route=express.Router();

const empController=require("../Controller/empController");

route.get("/", empController.empHome);
route.get("/insert",empController.empInsert);
route.get("display", empController.empDiplay);
route.get("/contact", empController.empContact);
route.post("/datasave", empController.studatasave)

module.exports=route;