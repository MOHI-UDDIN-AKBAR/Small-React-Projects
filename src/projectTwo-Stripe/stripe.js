import React, { useState } from "react";
import Product from "./Product";
import Developers from "./Developers";
import Company from "./Company";
import AllMix from "./AllMix";
const Stripe = () => {
  const [toggleForProduct, setToggleForProduct] = useState(false);
  const [toggleForDeveloper, setToggleForDeveloper] = useState(false);
  const [toggleForCompany, setToggleForCompany] = useState(false);
  const [toggleForAllMix, setToggleForAllMix] = useState(false);
  const showProduct = () => {
    setToggleForProduct(true);
  };
  const hideProduct = () => {
    setToggleForProduct(false);
  };
  const showDeveloper = () => {
    setToggleForDeveloper(true);
  };
  const hideDeveloper = () => {
    setToggleForDeveloper(false);
  };
  const showCompany = () => {
    setToggleForCompany(true);
  };
  const hideCompany = () => {
    setToggleForCompany(false);
  };
  const showEverything = () => {
    setToggleForAllMix(true);
  };
  return (
    <>
      <div className="stripe">
        <h1>Stripe</h1>
        <div className="links">
          <div className="same">
            <span
              className="main"
              onMouseLeave={hideProduct}
              onMouseOver={showProduct}
            >
              Products
            </span>
            <div className="show">{toggleForProduct && <Product />}</div>
          </div>
          <div className="same">
            <span
              className="main"
              onMouseLeave={hideDeveloper}
              onMouseOver={showDeveloper}
            >
              Developers
            </span>
            <div className="show">{toggleForDeveloper && <Developers />}</div>
          </div>
          <div className="same">
            <span
              className="main"
              onMouseLeave={hideCompany}
              onMouseOver={showCompany}
            >
              Company
            </span>
            <div className="show">{toggleForCompany && <Company />}</div>
          </div>
        </div>
        <h3>signIn</h3>
        <div className="bar" onClick={showEverything}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {toggleForAllMix && (
        <AllMix
          toggleForAllMix={toggleForAllMix}
          setToggleForAllMix={setToggleForAllMix}
        />
      )}
    </>
  );
};

export default Stripe;
