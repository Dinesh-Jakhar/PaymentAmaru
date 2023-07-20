import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const amount=props.amount;
  const [saveInfo, setSaveInfo] = useState(false);
  const [showGpayAlert, setShowGpayAlert] = useState(false);
  const [showCashAppAlert, setShowCashAppAlert] = useState(false);
  const [showAfterpayAlert, setShowAfterpayAlert] = useState(false);


  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardHolderFirstName, setCardHolderFirstName] = useState('');
  const [cardHolderLastName, setCardHolderLastName] = useState('');
  const [email,setEmail]=useState('');
  const [postalCode, setPostalCode] = useState('');

  

  const handleSubmit = (e) => {
  

  const cardData = {
    cardNumber,
    cardHolderFirstName,
    cardHolderLastName,
    postalCode,
    email,
    phoneNumber,
    cvc,
    expiration,
  };

  fetch('http://localhost:4000/api/v1/credit-cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cardData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      // Handle success response
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error
    });
};

  const handleSaveInfo = () => {
    setSaveInfo(!saveInfo);
  };

  const handleGpayClick = () => {
    setShowGpayAlert(!showGpayAlert);
  };

  const handleCashAppClick = () => {
    setShowCashAppAlert(!showCashAppAlert);
  };

  const handleAfterpayClick = () => {
    setShowAfterpayAlert(!showAfterpayAlert);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationChange = (e) => {
    setExpiration(e.target.value);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  };
  

  return (
    <div className="bg-gray-100 font-sans">
      <div className="p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Digital Media Promotion</h1>
      </div>
      <div className="p-6">
        <form >
          <div className="mb-6">
            <p className="text-xl font-semibold">Checkout</p>
            <div className="flex justify-between">
              <div className="w-1/2">
                <p className="text-sm text-gray-600">Subtotal</p>
              </div>
              <div className="w-1/2">
                <p className="text-sm text-right">${amount}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2">
                <p className="text-sm text-gray-600">Order total</p>
              </div>
              <div className="w-1/2">
                <p className="text-sm text-right">${amount}</p>
              </div>
            </div>
          </div>
          <hr className="border-gray-300 my-8" />
          <p className="mb-2 font-semibold">REQUIRED*</p>
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-300 rounded outline-none"
            name="email2"
            placeholder="Email ID"
            required
            value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-300 rounded outline-none"
            name="phone2"
            placeholder="Phone No."
            required
            value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <hr className="border-gray-300 my-8" />
          <p className="mb-2 font-semibold">EXPRESS CHECKOUT</p>
          <div className="text-center">
            <button
              className="btn-gpay"
              onClick={handleGpayClick}
            >
              <img
                src="gpay.png"
                alt="Google Pay"
                className="w-24 mx-auto"
              />
            </button>
            {showGpayAlert && (
              <p className="my_alert_gpay text-red-500">Not Available at this moment</p>
            )}
          </div>
          <hr className="border-gray-300 my-8" />
          <p className="mb-2 font-semibold">CONTACT</p>
          <div className="mb-4 flex">
            <input
              type="text"
              className="w-1/5 p-2 mr-2 border border-gray-300 rounded outline-none"
              name="pcode"
              value="+1"
              required
            />
            <input
              type="text"
              className="w-4/5 p-2 border border-gray-300 rounded outline-none"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          <input
            type="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded outline-none"
            name="email"
            placeholder="Email Address for receipt"
            required
          />
          <div className="mb-4 flex">
            <input
              type="text"
              className="w-1/2 p-2 mr-1 border border-gray-300 rounded outline-none"
              name="fname"
              placeholder="First Name"
              required
              value={cardHolderFirstName}
          onChange={(e) => setCardHolderFirstName(e.target.value)}
            />
            <input
              type="text"
              className="w-1/2 p-2 ml-1 border border-gray-300 rounded outline-none"
              name="lname"
              placeholder="Last Name"
              required
              value={cardHolderLastName}
  onChange={(e) => setCardHolderLastName(e.target.value)}
            />
          </div>
          <hr className="border-gray-300 my-8" />
          <p className="mb-2 font-semibold">PAYMENT <img src="lock.png" alt="Lock" className="w-6 inline" /></p>
          <p className="text-xs font-semibold mb-1">All transactions are secure and encrypted</p>
          <div className="active_payment_div mb-4 border-2 border-gray-300 rounded p-4">
            <div className="flex items-center">
              <div className="w-3/4">
                <p className="text-base font-semibold">Credit Card</p>
              </div>
              <div className="w-1/4 text-right">
                <img src="credit-card.png" alt="Credit Card" className="w-8 inline" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center border-b border-gray-300">
                <div className="w-1/6">
                  <img src="credit-card.png" alt="Credit Card" className="w-8 inline" />
                </div>
                <div className="w-5/6">
                  <input
                    type="text"
                    maxLength="19"
                    minLength="16"
                    className="w-full p-2 bg-gray-100 outline-none"
                    name="card_number"
                    placeholder="Card Number"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/3">
                  <input
                    type="text"
                    maxLength="7"
                    className="w-full p-2 bg-gray-100 outline-none"
                    name="card_exp"
                    placeholder="MM/YY"
                    required
                    value={expiration}
                    onChange={handleExpirationChange}
                  />
                </div>
                <div className="w-1/3">
                  <input
                    type="text"
                    maxLength="4"
                    className="w-full p-2 bg-gray-100 outline-none"
                    name="card_cvv"
                    placeholder="CVV"
                    required
                    value={cvc}
          onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
                <div className="w-1/3">
                  <input
                    type="text"
                    className="w-full p-2 bg-gray-100 outline-none"
                    name="card_postal"
                    placeholder="Postal Code"
                    required
                    value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <p className="card_alert text-red-500 mt-4"></p>
          </div>
          <div className="active_payment_div Cash_App mb-4">
            <div className="flex items-center">
              <div className="w-3/4">
                <p className="text-base font-semibold">Cash App Pay</p>
              </div>
              <div className="w-1/4">
                <img src="cash.png" alt="Cash App" className="w-8 inline" />
              </div>
            </div>
          </div>
          {showCashAppAlert && (
            <p className="Cash_App_alert text-red-500">Not Available at this moment</p>
          )}
          <div className="active_payment_div Afterpay mb-4">
            <div className="flex items-center">
              <div className="w-3/4">
                <p className="text-base font-semibold">
                  Afterpay<br />
                  <span className="text-xs">4 interest-free installments of $7.50</span>
                </p>
              </div>
              <div className="w-1/4">
                <img src="afterpay.png" alt="Afterpay" className="w-8 inline" />
              </div>
            </div>
          </div>
          {showAfterpayAlert && (
            <p className="Afterpay_alert text-red-500">Not Available at this moment</p>
          )}
          <hr className="border-gray-300 my-8" />
          <p className="mb-2 font-semibold">REMEMBER ME</p>
          <div className="p-4 bg-gray-100 mb-4 rounded text-sm">
            <div className="flex items-center">
              <div className="w-1/8">
                <img src="diss.png" alt="Remember Me" className="w-8" />
              </div>
              <div className="w-7/8">
                Save my information for a faster checkout
              </div>
            </div>
          </div>
          <div className="py-4">
            <img src="ppp.png" alt="Pay" className="w-6 inline" /> <b>Pay</b>
          </div>
          <hr className="border-gray-300 my-8" />
          
            <Link to='/Checkout'>
                <button
              type="submit"
              className="btn bbtn"
              name="btnsave"
              onClick={handleSubmit}
            >
              Pay ${amount}
            </button>
            </Link>
            
          
        </form>
      </div>
      <div className="p-6 text-center">
        <img src="square.png" alt="Square" className="w-12 inline" />
        <p className="text-gray-600 text-sm">Secure payment by Square</p>
      </div>
    </div>
  );
};


export default Details;
