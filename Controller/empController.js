const EmpModel=require("../Model/empModel");

const empHome=(req,res)=>{
    res.render("Home")
}

const empInsert=(req,res)=>{
    res.render("Insert");
}

const empDiplay=(req,res)=>{
    res.render("Display")
}

const empContact=(req,res)=>{
    res.render("Contact")
}

module.exports={
    empHome,
    empInsert,
    empDiplay,
    empContact

}