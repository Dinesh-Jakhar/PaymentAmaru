const CreateOtp = require("../models/createOtp");


exports.verifyOtp = async (req, res) => {
    try {
        const {otp}=req.body;
        if(!otp){
            return res.status(400).json({
                status:false,
                messege:"Enter OTP",
            })
        }
        const CreateOtp = await CreateOtp.create({

        })
         return res.status(200).json({
      status: 201,
      message: "Otp Verified Successfully",
      data: user,
    });
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
        status: 500,
        message: error.message,
        });
        
        } 
    
}