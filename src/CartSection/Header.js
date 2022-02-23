import React, { useEffect } from "react";

const Header = ({ checkTotalAmount }) => {
  return (
    <>
      <div className="header">
        <h1>Use State</h1>
        <div className="bag">
          <span>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </span>
          <span className="count">{checkTotalAmount()}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
