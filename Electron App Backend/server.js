const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connectDb = require('./config/dbconnect')

dotenv.config()
connectDb()

app.use(cors())


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('server running on port',port)
})

app.use(express.json());
app.use('/user', require("./routes/authroute"))