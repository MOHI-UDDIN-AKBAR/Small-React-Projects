import React, { useRef, useState } from "react";
import SideBar from "./SideBar";
const ProjectOne = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleForModel, setToggleForModel] = useState(false);
  const showSideBar = () => {
    setToggle(true);
  };
  const showModel = () => {
    setToggleForModel(true);
  };
  const hideModel = () => {
    setToggleForModel(false);
  };
  return (
    <>
      <div className="sideBar">
        <div className="bar" onClick={() => showSideBar()}>
          {!toggle && (
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          )}
        </div>
        {toggle && <SideBar toggle={toggle} setToggle={setToggle} />}
        <div className="showModel">
          {toggleForModel && (
            <div className="ModelContent">
              <h1>Model Content</h1>
              <span onClick={hideModel}>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          )}
          {!toggleForModel && <button onClick={showModel}>Show Model</button>}
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
