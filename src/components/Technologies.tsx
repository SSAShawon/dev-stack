// import React from 'react';

import { use } from "react";
import Card from "./Card";

interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const getTechnologies= async()=>{
  const res= await fetch("/technologies.json");
  const data= await res.json();
  return data;
}

const technologyPromise=getTechnologies()


const Technologies = () => {
  const technologies =use(technologyPromise);
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-4xl font-bold py-4">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>
        <p className="pb-6 text-gray-600">Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* card section */}
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-6">
        {/* Tech Card  */}
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-5">
                {
                  technologies.map((technology:Technology)=>(
                    <Card key={technology.id} technology={technology}/>
                  ))
                }
          </div>
        </div>











        {/* Select Card  */}
        <div className="col-span-1 border-2 border-gray-300 px-6 py-4 self-start">
            <h2 className="text-2xl font-bold py-2">Your Stack</h2>
            <p className="text-gray-400 py-2">No technologies selected yet.</p>
            <div className="border-2 border-dashed rounded-2xl border-gray-300">
              <p className="text-center text-gray-400 p-10">Your stack is empty</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
