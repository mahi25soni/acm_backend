const express = require("express")
const router = express.Router()
const { handleVerification } = require("../../middlewares/verificationError")

const { setRegistration } = require("./atten.controller")

router.post("/register", setRegistration, handleVerification)


module.exports = router