const EmpControlller=require("../Model/empModel");

const empHOme=(req,res)=>{
    res.render("Home")
}
const empAbout=(req,res)=>{
    res.render("About")
}

const empContact=(req,res)=>{
    res.render("Contact")
}

module.exports={
    empHOme,
    empAbout,
    empContact
}