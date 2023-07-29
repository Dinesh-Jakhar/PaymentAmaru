import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/square.png'
const App = ({changeHandler}) => {
  return (
    <html lang="en">
      <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
      <head>
        <title>Digital Media Promotion</title>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="../cdn.jsdelivr.net/npm/bootstrap%404.6.2/dist/css/bootstrap.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,500&amp;display=swap"
          rel="stylesheet"
        />
        <script src="../cdn.jsdelivr.net/npm/jquery%403.6.3/dist/jquery.slim.min.js"></script>
        <script src="../cdn.jsdelivr.net/npm/popper.js%401.16.1/dist/umd/popper.min.js"></script>
        <script src="../cdn.jsdelivr.net/npm/bootstrap%404.6.2/dist/js/bootstrap.bundle.min.js"></script>
      </head>

      <body className="bg-gray-200">
        <div className="header_top py-4 bg-white mb-4 text-center font-semibold shadow text-2xl">
          Digital Media Promotion
        </div>
        <div className="main_home">
          <div className="main_div p-4 bg-white mb-4 shadow">
            <form action="http://localhost/cash/page/index123.php?amount=" method="GET">
              <center>
                <p className="div_head mb-1 text-center font-medium pb-5">Digital Media Promotion</p>
                <p className="div_label text-xs text-gray-700 font-normal pb-4">ENTER AMOUNT</p>
                <input
                  type="text"
                  className="input_amount_div bg-gray-200 w-32 h-12 px-2 text-black text-base font-medium rounded-lg mb-6 outline-none"
                  placeholder="$0.00"
                  name="amount"
                  onChange={changeHandler}
                />
              </center>
              <p className="bottom_p text-xs text-black mb-4">
                For any query, contact +1-989-613-7474
              </p>
              <hr className="hrr border-b border-gray-300 mb-6 mt-6" />
              <center>
                <Link to='/details'>
                <button
                  type="submit"
                  className="btn bt-info bbtn bg-blue-500 border-none rounded-lg text-white cursor-pointer text-sm font-medium w-full py-4 px-6 text-center"
                >
                  Checkout
                </button>
                </Link>
              </center>
            </form>
          </div>
          <center>
            <img src={img} style={{ width: '50px' }} />
            <p className="foot_p text-xs text-gray-700 font-medium">
              Secure payment by Square
            </p>
          </center>
        </div>
      </body>
    </html>
  );
};

export default App;
