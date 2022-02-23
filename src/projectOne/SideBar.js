import React, { useEffect, useRef } from "react";

const SideBar = ({ toggle, setToggle }) => {
  const refContainer = useRef(null);
  const hideSideBar = () => {
    setToggle(false);
  };
  useEffect(() => {
    refContainer.current.style.left = "0px";
    console.log(refContainer.current.style);
  }, [toggle, setToggle]);
  return (
    <>
      <div className="allContent">
        <div className="content" ref={refContainer}>
          <div className="heading">
            <h1>Hello World</h1>
            <span onClick={hideSideBar}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
          <div className="link">
            <span>HOME</span>
            <span>Team</span>
            <span>Projects</span>
            <span>Calendar</span>
            <span>Documents</span>
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
      </div>
    </>
  );
};

export default SideBar;
