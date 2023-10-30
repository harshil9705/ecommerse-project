const googlestretegy = require('passport-google-oauth20').Strategy
require('dotenv').config()
const googleauth = (passport)=>{
    passport.use(new googlestretegy({
        clientID: process.env.GOOGLE_CLIENT_ID ,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:9705/user/google/auth"
    },(accessToken, refreshToken, profile, cb)=>{
        cb(null,profile)
    }))

    passport.serializeUser((user,done)=>{
        done(null,user)
    })

    passport.deserializeUser((user,done)=>{
        done(null,user)
    })
}

module.exports = googleauth 