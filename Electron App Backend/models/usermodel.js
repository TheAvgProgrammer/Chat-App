const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    mail : {
        type: String,
        required: [true, "Enter The Mail"]
    } ,
    username: {
        type: String,
        required: [true, "Enter The Username"]
    } ,
    password: {
        type: String,
        required: [true, "Enter The Password"]
    } 
}, {
    timestamps : true
})

module.exports = mongoose.model("User", userSchema)