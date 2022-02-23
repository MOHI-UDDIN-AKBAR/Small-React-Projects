import React, { useEffect } from "react";

const AllMix = ({ toggleForAllMix, setToggleForAllMix }) => {
  const hideEverything = () => {
    console.log("helloo");
    setToggleForAllMix(false);
  };

  const checkWidth = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 600) {
      setToggleForAllMix(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);
  return (
    <>
      <div className="allMix">
        <div className="product">
          <span className="title">Products</span>
          <div className="allList">
            <span>Payment</span>
            <span>Terminal</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="developer">
          <span className="title">Developers</span>
          <div className="allList">
            <span>plugins</span>
            <span>Libraries</span>
            <span>Help</span>
            <span>Billing</span>
          </div>
        </div>
        <div className="company">
          <span className="title">Company</span>
          <div className="allList">
            <span>About</span>
            <span>Customers</span>
          </div>
        </div>
        <span className="cancel" onClick={hideEverything}>
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
    </>
  );
};

export default AllMix;
