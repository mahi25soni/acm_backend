 const mongoose = require("mongoose")


 const attendanceSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    rollnumber : {
        type : String,
        unique : [true, "This roll number is alrady registered"]
    },
    semester : {
        type : String,
    },
    department : {
        type : String,
    },
    section : {
        type : String,
    }
    
 },{
    timestamps: true,
  })

 const attendance = new mongoose.model("attendance", attendanceSchema)


 module.exports = {
    attendance
 }