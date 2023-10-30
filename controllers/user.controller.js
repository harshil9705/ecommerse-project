const { user } = require("../models/user.schema");


// get route

const index = (req,res)=>{
    res.render('index')
}

const getsignup = (req,res)=>{
    res.render('signup')
}

const getsignin = (req,res)=>{
    res.render('signin')
}


const google = (req,res)=>{
    res.render('index');
}

const logout = (req,res)=>{
    req.logOut(err=>{
        if(err){
            res.send(err)
        }
        else{
            res.send('signup')
        }
    })
  }


const getforget= (req,res)=>{
    res.render('forget')
}

// post routes

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

const forget = async(req,res)=>{
    const {oldpass,newpass} = req.body

    if(req.user.password == oldpass){
        await user.findByIdAndUpdate(req.user.id,{password : newpass})
        res.send(await user.findById(req.user.id))
    }
    else{
        res.redirect('signup')
    }
}

const profile= (req,res)=>{
    if(req.user){
        res.render('profile',{user:req.user})
    }
    else{
        res.redirect('signin')
    }
}

module.exports = {index,signup,getsignup,getsignin,google,logout,getforget,forget,profile}