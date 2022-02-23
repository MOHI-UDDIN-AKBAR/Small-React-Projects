import React from "react";

const Product = () => {
  return (
    <>
      <div className="listOfProducts">
        <div className="empty"></div>
        <div className="list">
          <div className="heading">
            <span>Products</span>
            <div className="allList">
              <span>Payment</span>
              <span>Terminal</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
