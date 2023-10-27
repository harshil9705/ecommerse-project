const googlestretegy = require('passport-google-oauth20').Strategy

const googleauth = (passport)=>{
    passport.use(new googlestretegy({
        clientID: '632389055528-apaetbu9uhg1bunfi4ihnduhvb9favfq.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: "http://localhost:9705/"
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