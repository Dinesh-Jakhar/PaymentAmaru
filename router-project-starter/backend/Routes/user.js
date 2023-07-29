const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/createUser");

router.post("/credit-cards", createUser);
router.post("/verify-otp",verifyOtp);

module.exports = router;
