import React, { useState, useEffect } from 'react';

const Otp = () => {
  const [otp, setOTP] = useState('');
  const [remainingTime, setRemainingTime] = useState(300); // 5 minutes in seconds

  const handleSubmit = (e) => {
    e.preventDefault();

    

  const cardOtp = {
    otp
  };

  fetch('http://localhost:4000/api/v1/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cardOtp),
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
    // Handle OTP submission here
    // You can send the OTP to the server for verification, etc.
    console.log('OTP submitted:', otp);
  };

  useEffect(() => {
    // Start the timer when the component mounts
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Convert remainingTime to minutes and seconds
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-6">Enter Verification Code</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            className="w-21 text-2xl text-center mb-6 border border-gray-300 rounded focus:outline-none"
            maxLength="6"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="OTP"
            required
          />
          <p className="text-gray-600 mb-2">
            Time remaining: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </p>
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
