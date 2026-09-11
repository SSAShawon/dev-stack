// import React from 'react';

const Card = () => {
  return (
     <div className="border-2 border-blue-100 rounded-xl p-4">
        <div className="flex justify-end ">
            <div className="w-fit rounded-4xl px-3 py-1 bg-blue-100 text-blue-400 border-2 border-blue-200">
            <h4>Popular</h4>
        </div>
        </div>

        <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="React" className="w-10 h-10" />

        <h2 className="font-bold text-xl my-4">React</h2>
        <p className="text-gray-500 text-sm py-3">
          A declarative, component-based JavaScript library for building modern
          user interfaces.
        </p>
        <div className="flex justify-between gap-5 py-4">
          <p className="bg-gray-200 px-2 py-1 rounded-xl text-sm">Frontend</p>
          <p className="text-sm">Beginner-Friendly</p>
          <p>⭐ 4.9</p>
        </div>
        <div className="">
          <button className="btn btn-neutral w-full rounded-xl">Add to Stack</button>
        </div>
      </div>
  );
};

export default Card;
