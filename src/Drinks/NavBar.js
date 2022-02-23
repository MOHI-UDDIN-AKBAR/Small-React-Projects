import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="logo">
          <h1>Drinks</h1>
        </div>
        <div className="links">
          <Link className="link" to={"/"}>
            <span>Home</span>
          </Link>
          <Link className="link" to={"/about"}>
            <span> About</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
