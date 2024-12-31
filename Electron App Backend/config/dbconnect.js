// const dotenv = require('dotenv')
const mongoose = require('mongoose')

const connectDb = async () => {
    console.log(process.env.CONNECTION_STRING)
    mongoose.connect(process.env.CONNECTION_STRING).then(() => {
        console.log('connection hogyaaaa')
    }).catch((e) => {
        console.error(e)
    })
}

module.exports = connectDb