const { user } = require('../models/user.schema')

const localstretegy = require('passport-local').Strategy

const localauth = (passport)=>{
    passport.use(new localstretegy({usernameField :'email'} ,async(email,password,done)=>{
        try {
            const data = await user.findOne({email : email})

        if(!data){
            return done(null,false)
        }
        if(data.password != password){
            return done(null,false)
        }
        done(null,data)
        } catch (error) {
         done(null,error.message)   
        }
    }))

    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })

    passport.deserializeUser(async(id,done)=>{
        const data = await user.findById(id)
        done(null,data)
    })
}

module.exports = {localauth}