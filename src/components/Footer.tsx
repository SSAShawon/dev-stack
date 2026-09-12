// import React from "react";
import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-5 gap-15 py-7">
        {/* 1st part */}
        <div className="col-span-2">
          <img src={logo} alt="" />
          <p className="pb-6 pt-2 text-gray-600">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-8 text-gray-900">
            <a href="">GitHub</a>
            <a href="">Twitter</a>
            <a href="">LinkedIn</a>
          </div>
        </div>

        {/* 2nd part */}
        <div>
          <h1 className="font-bold">PRODUCT</h1>
          <div className="text-gray-600 pt-3 space-y-2 ">
            <h4>Home</h4>
            <h4>Technologies</h4>
            <h4>Projects</h4>
          </div>
        </div>

        {/* 3rd part  */}
        <div>
          <h1 className="font-bold">COMPANY</h1>
          <div className="text-gray-600  pt-3 space-y-2">
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Careers</h4>
          </div>
        </div>

        {/* 4th part  */}
        <div>
          <h1 className="font-bold">LEGAL</h1>
          <div className="text-gray-600 pt-3 space-y-2">
            <h4>Privacy Policy</h4>
            <h4>Terms of Service</h4>
          </div>
        </div>
      </div>

      <div className="divider"></div>
      {/* under footer */}
      <div className="flex justify-between pb-10 text-gray-400">
        <div>
          <h5>© 2026 Dev Stack. All rights reserved.</h5>
        </div>
        <div className="flex gap-10">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
