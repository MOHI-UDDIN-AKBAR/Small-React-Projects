import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="menu">
        <h1>OUR MENU</h1>
        <div className="linkOfMenu">
          <Link className="link" to={"./"}>
            <h3>ALL</h3>
          </Link>
          <Link className="link" to={"./breakfast"}>
            <h3>Breakfast</h3>
          </Link>
          <Link className="link" to={"./lunch"}>
            <h3>Lunch</h3>
          </Link>
          <Link className="link" to={"./shakes"}>
            <h3>Shakes</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
