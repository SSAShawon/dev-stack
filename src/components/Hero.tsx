// import React from "react";
import heroPhoto from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-evenly gap-6 w-[80%] mx-auto">
      <div className="max-w-xl">
        <h1 className="text-6xl py-3 font-bold ">Build Your Ideal</h1>
        <h1 className="text-6xl py-3 font-bold bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          Development Stack
        </h1>
        <p className="py-6">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="py-4 flex gap-3">
          <button className="btn text-white bg-linear-to-r from-orange-500 to-pink-500 rounded-xl">
            Explore Technologies
          </button>
          <button className="btn bg-white  ">Learn More</button>
        </div>
      </div>
      <div className="">
        <img src={heroPhoto} alt="" />
      </div>
    </div>
  );
};

export default Hero;
