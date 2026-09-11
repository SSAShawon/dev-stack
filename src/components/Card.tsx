// import React from 'react';

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


const Card = ({ technology }: { technology: Technology }) => {
  return (
     <div className="border-2 border-blue-100 rounded-xl p-4">
        <div className="flex justify-end ">
            <div className="w-fit rounded-4xl px-3 py-1 bg-blue-100 text-blue-400 border-2 border-blue-200">
            {technology.badge}
        </div>
        </div>

        <img src={technology.icon} alt={technology.name} className="w-10 h-10" />

        <h2 className="font-bold text-xl my-4">{technology.name}</h2>
        <p className="text-gray-500 text-sm py-3">
          {technology.description}
        </p>
        <div className="flex justify-between gap-5 py-4">
          <p className="bg-gray-200 px-2 py-1 rounded-xl text-sm">{technology.category}</p>
          <p className="text-sm">{technology.difficulty}</p>
          <p>⭐ {technology.rating}</p>
        </div>
        <div className="">
          <button className="btn btn-neutral w-full rounded-xl">Add to Stack</button>
        </div>
      </div>
  );
};

export default Card;
