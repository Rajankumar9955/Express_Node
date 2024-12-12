

const stuHOme=(req,res)=>{
    res.send("<h1>This is student home page</h1>")
}

const stuSubject=(req,res)=>{
    res.send("<h1>This is student subject page</h1>")
}

const stuResult=(req,res)=>{
    res.send("<h1>This is student result page</h1>")
}

const stuFees=(req,res)=>{
    res.send("<h1>This is student fees page</h1>")
}
module.exports={
    stuHOme,
    stuSubject,
    stuResult,
    stuFees
}