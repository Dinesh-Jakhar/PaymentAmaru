const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./Routes/user");
var cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4000;


app.use(
  cors({
    origin: "*",
  })
);



const { createUser } = require("./controllers/createUser");
const {verifyOtp}=require("./controllers/verifyOtp");

// Middleware
app.use(express.json());



app.use("/api/v1", createUser);
app.post('/credit-cards', userRoutes);
app.post('/verify-otp',verifyOtp);


// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
