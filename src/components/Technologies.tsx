// import React from 'react';

import { use, useState } from "react";
import Card from "./Card";
import type { Technology } from "./type/Type";
import { toast } from "react-toastify";

const getTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const technologyPromise = getTechnologies();

const Technologies = () => {
  const technologies = use(technologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
    



  const handleAddTechnology = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some((item)=>item.id===technology.id)

    if(alreadySelected){
      toast.warning(`${technology.name} is already in your stack`)
      return;
    }
    setSelectedTechnologies([...selectedTechnologies, technology]);
    toast.success(`${technology.name} added to your stack`)
  };



  const handleRemoveTechnology=(id:number)=>{
    const removedTechnology=selectedTechnologies.find((technology)=>
      technology.id ===id
  )

    const remainingTechnologies=selectedTechnologies.filter(
      (technology)=>technology.id !==id
    )
    setSelectedTechnologies(remainingTechnologies)

    if(removedTechnology){
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  }

  const handRemoveAll=()=>{
    setSelectedTechnologies([]);
    toast.info("All Technologies removed from your stack.")
  }

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-4xl font-bold py-4">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>
        <p className="pb-6 text-gray-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* card section */}
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tech Card  */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((technology) => (
              <Card
                key={technology.id}
                technology={technology}
                onAdd={handleAddTechnology}
                isSelected={selectedTechnologies.some(
                  (item) => item.id === technology.id,
                )}
              />
            ))}
          </div>
        </div>

        {/* Select Card  */}
        <div className="sm:col-span-1 border border-gray-300 rounded-xl px-6 py-4 self-start">
          <h2 className="text-2xl font-bold py-2">Your Stack</h2>
          <p className="text-gray-400 py-2">
            {selectedTechnologies.length===0 ? "No Technologies Selected yet." : `${selectedTechnologies.length} Technology Selected`}
          </p>

          <div className="space-y-3">
            {selectedTechnologies.length === 0 ? (
              <div className="border-2 border-dashed rounded-2xl border-gray-300">
                <p className="text-center text-gray-400 p-10">
                  Your Stack is empty
                </p>
              </div>
            ) : (
              selectedTechnologies.map((technologies) => (
                <div
                  key={technologies.id}
                  className="border border-gray-200 rounded-xl flex items-center justify-between "
                >
                  <div className="flex items-center gap-3 m-3">
                    <img
                      src={technologies.icon}
                      alt={technologies.name}
                      className="w-10 h-10"
                    />

                    <div>
                      <h3 className="font-semibold">{technologies.name}</h3>
                      <p className="text-sm text-gray-500">
                        {technologies.category}
                      </p>
                    </div>
                  </div>
                  <button onClick={()=>handleRemoveTechnology(technologies.id)} className="pr-3 text-gray-400 text-3xl">✕</button>
                </div>
              ))
            )}
          </div>

          {selectedTechnologies.length > 0 && (
            <button onClick={handRemoveAll} className="btn w-full mt-4 rounded-xl border border-red-300 text-red-500 bg-white">
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
