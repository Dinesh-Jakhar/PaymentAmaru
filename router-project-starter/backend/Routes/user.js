const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/createUser");

router.post("/credit-cards", createUser);


module.exports = router;
