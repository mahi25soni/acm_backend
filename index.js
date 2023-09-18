const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const attendanceRouter = require("./src/attendance/atten.route")
const cors = require("cors")
const ser = require("")
require('dotenv'). config();


const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors())

app.use("/", attendanceRouter)

const startApp = async () => {
try {
    await mongoose.connect(process.env.db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connected to the MongoDB database');
    app.listen(process.env.PORT || 3000, function() {
        console.log("we are at port 3000")
    })
}
catch(error){
    console.error('Error connecting to the database:', error);
}};

startApp()

export const handler = serverless(app);