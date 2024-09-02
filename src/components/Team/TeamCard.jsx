import React from "react";

export const TeamCard = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="card-img">
        <img src={data.cover} alt={data.title} className="w-full h-50 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
        <p className="text-gray-600">{data.post}</p>
      </div>
    </div>
  );
};
