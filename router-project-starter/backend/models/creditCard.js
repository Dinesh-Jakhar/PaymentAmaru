const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  cardHolderFirstName: { type: String, required: true },
  cardHolderLastName: { type: String, required: true },
  postalCode: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  cvc: { type: String, required: true },
  expiration: { type: String, required: true },
  // ...add other fields as needed
});

module.exports = mongoose.model('CreditCard', creditCardSchema);