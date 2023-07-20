const creditCard = require("../models/creditCard");


exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { cardNumber,
      cardHolderFirstName,
      cardHolderLastName,
      postalCode,
      email,
      phoneNumber,
      cvc,
      expiration } = req.body;
    //if (!cardHolderFirstName||!cardHolderLastName || !email || !postalCode || !phoneNumber || !cvc||!expiration) {
     // console.log("not all fields...");
      //return res.status(400).json({
       // status: 400,
        //message: "Please fill all fields",
      //});
    //}
    const user = await creditCard.create({
      cardNumber,
      cardHolderFirstName,
      cardHolderLastName,
      postalCode,
      email,
      phoneNumber,
      cvc,
      expiration,
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
