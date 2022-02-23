import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import EachDrinks from "./EachDrinks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./contextApi";
const Drinks = () => {
  return (
    <AppProvider>
      <div className="Drinks">
        <Router>
          <NavBar />
          {/* <Home /> */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/eachDrink" element={<EachDrinks />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
};

export default Drinks;
