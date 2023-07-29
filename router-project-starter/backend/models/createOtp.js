const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
  otp: { type: String, required: true },
  
});

module.exports = mongoose.model('createOtp', OtpSchema);