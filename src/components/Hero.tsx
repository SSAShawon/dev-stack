// import React from "react";
import heroPhoto from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-[80%] mx-auto">
      <div className="max-w-xl">
        <h1 className="text-4xl text-center sm:text-left sm:text-6xl py-3 font-bold ">Build Your Ideal</h1>
        <h1 className="text-4xl text-center sm:text-left sm:text-6xl py-3 font-bold bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          Development Stack
        </h1>
        <p className="text-center sm:text-left py-6">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="py-4 flex gap-3 justify-center sm:justify-start">
          <button className="btn text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 rounded-xl">
            Explore Technologies
          </button>
          <button className="btn bg-white rounded-xl border-gray-200 ">Learn More</button>
        </div>
      </div>
      <div className="">
        <img src={heroPhoto} alt="" />
      </div>
    </div>
  );
};

export default Hero;
