// import React from "react";
import logo from "../assets//logo-text.png";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  return (
    <div className="flex items-center justify-around sticky top-0 bg-white py-5">

    <button className="md:hidden text-3xl">
      <FaBars/>
    </button>

      {/* left side image */}
      <img src={logo} alt="Dev Stack"  className=""/>

      {/* middle a nav item */}
      <div className="hidden md:flex gap-6 text-gray-600 ">
        <a href="#" className="text-pink-500 font-semibold">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      {/* right sign in/up button */}

      <div className="flex gap-2 sm:">
        <button className="btn bg-white border-0 text-gray-600 rounded-4xl px-7">Sign In</button>
        
        <button className="btn bg-pink-600 rounded-4xl px-7 text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
