const express = require('express')
const app = express()
const dotenv = require('dotenv')
const asyncHandler = require('express-async-handler')
const User = require('../models/usermodel')

const login = asyncHandler(async(req, res) => {
    const {username, password} = req.body

    const user = await User.find({username: username, password: password})
    const findUser = await User.find({username: username})
    if( user.toString() != [])
        res.status(200).json(user);
    else
        if (findUser.toString() != [])
            res.status(400).json({message:'Wrong Password'});
        else
            res.status(400).json({message:'Wrong username'});
})

const signup = asyncHandler(async(req, res) => {
    const {mail, username, password} = req.body
    const userfind = await User.find({username: username})
    const mailfind = await User.find({mail: mail})

    if (userfind.toString() != []){
        res.status(400).json({ message: 'Username Taken' });
        return;
    }

    if (mailfind.toString() != []){
        res.status(400).json({ message: 'Account Exists' });
        return;
    }

    const contact = await User.create({
        username,
        password,
        mail
    })

    res.status(201).json({ message: 'Account Created' });
})

const allusers = async (req, res) => {
    const user = await User.find()
    res.status(200).json(user);
} 

module.exports = {
    login, 
    signup,
    allusers
}