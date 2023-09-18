const {attendance} = require("../../models/models")
const getIP = require("ipware")().get_ip
const setRegistration = async (req, res, next) => {
    try {
        const newuser = new attendance(req.body)
        await newuser.save()
        res.status(200).json({success : true , "Message" : "Noted!"})
    }
    catch(e){
        next(e)
    }
}

module.exports = {
    setRegistration
}