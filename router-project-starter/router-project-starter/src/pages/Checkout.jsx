import React from 'react';

function Checkout(props) {
  const amount=props.amount;
  return (
    <div>
    <div className="header_top bg-white py-6 mb-6 text-center font-semibold shadow-md">
      Digital Media Promotion
    </div>
    <div className="main_home">
      <div className="main_div p-6 bg-white mb-6 shadow-md">
        <div className="check">
          <div className="row">
            <div className="col-12">
              <center>
                <img src="check.png" className="w-6 mb-4" alt="Check" />
                <p className="font-semibold">Your order has been received!</p>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="order_text">SUMMARY</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="Subtotal_text">Promotion charges</p>
            </div>
            <div className="col-6">
              <p className="Subtotal_money">${amount}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="Subtotal_text">Promotion media changes</p>
            </div>
            <div className="col-6">
              <p className="Subtotal_money">${amount}</p>
            </div>
          </div>
        </div>
        <hr className="hrr" />
        <div className="row">
          <div className="col-6">
            <p className="Subtotal_text">Subtotal</p>
          </div>
          <div className="col-6">
            <p className="Subtotal_money">${amount}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p className="Subtotal_text">Tax</p>
          </div>
          <div className="col-6">
            <p className="Subtotal_money">$25.76</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <p className="Subtotal_text">
              <b>Total Order</b>
            </p>
          </div>
          <div className="col-6">
            <p className="Subtotal_money">
              <b>${amount}</b>
            </p>
          </div>
        </div>

        <hr className="hrr" />
        <p className="headd_text">Contact Details</p>
        <p>Full Name: asc asc</p>
        <p>Email Address: jiwhfiuwe@gmail.com</p>
        <p>Phone Number: +13 233453452</p>
      </div>
    </div>

    <center>
      <img src="square.png" className="w-10" alt="Square" />
      <p className="foot_p">Secure payment by Square</p>
    </center>
    </div>
  );
}

export default Checkout;