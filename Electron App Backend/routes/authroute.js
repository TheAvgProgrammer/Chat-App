const express = require('express')
const router = express.Router()

const {
    login,
    signup,
    allusers
} =  require( '../controllers/authcontroller')

router.route('/login').post(login)

router.route('/signup').post(signup)

router.route('/allusers').get(allusers)

module.exports = router