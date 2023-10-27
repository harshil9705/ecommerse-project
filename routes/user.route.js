const {Router} = require('express')
const { index, signup, getsignup, getsignin, signin } = require('../controllers/user.controller')
const passport = require('passport')
const router = Router()

router.get('/',index)
router.post('/signup',signup)
router.post('/signin',passport.authenticate('local',{failureFlash : '/login'}),signin)
router.get('/signup',getsignup)
router.get('/signin',getsignin)
router.get('/google',passport.authenticate('google',{scope : ['profile']}))

module.exports={router}