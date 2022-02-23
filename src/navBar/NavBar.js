import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const refContainer = useRef(null);
  const showAll = () => {
    console.log(refContainer.current.style);
    if (toggle) {
      refContainer.current.style.transform = "rotateZ(0deg)";
    } else {
      refContainer.current.style.transform = "rotateZ(90deg)";
    }
    console.log();
    setToggle(!toggle);
  };
  return (
    <div className="NavBar">
      <div className="logo">
        <span>Hello World</span>
        <span className="bar" onClick={() => showAll()} ref={refContainer}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
      <div className="allLink">
        {toggle && (
          <>
            <Link className="link" to={"./"}>
              Home
            </Link>
            <Link className="link" to={"./contact"}>
              Contact
            </Link>
            <Link className="link" to={"./about"}>
              About
            </Link>
          </>
        )}
      </div>
      <div className="icons">
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
        <span>
          <i className="fa-brands fa-facebook-f"></i>
        </span>
        <span>
          <i className="fa-brands fa-twitter"></i>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
