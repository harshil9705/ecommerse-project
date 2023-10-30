const {Router} = require('express')
const { index, signup, getsignup, getsignin, google, googleauth, logout, getforget, forget, profile } = require('../controllers/user.controller')
const passport = require('passport')
const { isauth } = require('../middlewares/middleware')
const router = Router()

// get
router.get('/',index)
router.get('/signup',getsignup)
router.get('/signin',getsignin)
router.get('/google',passport.authenticate('google',{scope : ['profile']}))
router.get('/google/auth',google);
router.get('/logout',logout)
router.get('/forget',isauth,getforget)
router.get('/profile',profile)

// post
router.post('/signup',signup)
router.post('/signin',passport.authenticate('local',{successRedirect:'/user/',failureRedirect : '/user/signup'}))
router.post('/forget',forget)
module.exports={router} 