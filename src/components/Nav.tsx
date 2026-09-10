import React from "react";
import logo from "../assets//logo-text.png";
const Nav = () => {
  return (
    <div>
      {/* left side image */}
      <img src={logo} alt="" />

      {/* middle a nav item */}
      <div>
        <a href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      {/* right sign in/up button */}

      <div>
        <button className="btn btn-secondary">Secondary</button>
      </div>
    </div>
  );
};

export default Nav;
