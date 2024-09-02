// src/components/AgencyProfileCard.js
import React from 'react';

const AgencyProfileCard = ({ name, rating, description, logo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-4">
        <img src={logo} alt={`${name} logo`} className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <div className="text-yellow-500">
            {'★'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
};

export default AgencyProfileCard;
