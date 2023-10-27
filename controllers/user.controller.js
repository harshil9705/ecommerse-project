const { user } = require("../models/user.schema");

const index = (req,res)=>{
    res.render('index')
}

const getsignup = (req,res)=>{
    res.render('signup')
}

const getsignin = (req,res)=>{
    res.render('signin')
}

const signup = async(req,res)=>{
    try {
        const data = await user.findOne({username : req.body.username})
        
    if(data){
        return res.render('signin')
    }
    else{
        const data = await user.create(req.body)
        return res.send(data)
    }
} catch (error) {
        res.send(error.message)   
    }
}

const signin = (req,res)=>{
    res.render('index')
}

module.exports = {index,signup,getsignup,getsignin,signin}