import React from "react";
import All from "./All";
import { Link } from "react-router-dom";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Shakes from "./Shakes";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Menu = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<All />}></Route>
          <Route path="/breakfast" element={<Breakfast />}></Route>
          <Route path="/lunch" element={<Lunch />}></Route>
          <Route path="/shakes" element={<Shakes />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default Menu;
