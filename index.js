const express = require('express')
const { connection } = require('./config/database')
const { router } = require('./routes/user.route')
const passport= require('passport')
const session = require('express-session')
const { localauth } = require('./helper/local')
const googleauth = require('./helper/google')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.static(__dirname+'/public'))

app.use(session({secret:'privet-key'}))
app.use(passport.initialize())
app.use(passport.session())
localauth(passport)
googleauth(passport)

app.use('/user',router)

app.listen(9705,()=>{
    console.log('9705');
    connection()
})