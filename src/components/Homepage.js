import React from "react";
import logo from "../img/logo.svg";
import screenshot from "../img/screenshot.png";

const Homepage = ({ setScreen }) => {
  const addStuffs = () => {
    setScreen("addStuffs");
  };
  return (
    <header className="Homepage">
      <img src={logo} className="Homepage-logo" alt="logo" />
      <div className="container">
        <div className="left">
          <img src={screenshot} className="screenshot" alt="screenshot" />
        </div>
        <div className="right">
          <p>
            Keep track of the Stuffs you do daily in this fun(ish)-to-use app!
          </p>
          <button onClick={addStuffs}>Start!</button>
        </div>
      </div>
    </header>
  );
};

export default Homepage;
