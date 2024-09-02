// src/components/ServiceList.js
import React from 'react';

const ServiceList = ({ services }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4 max-w-sm mx-auto">
      <h3 className="text-lg font-bold mb-2">Services Offered</h3>
      <ul className="list-disc list-inside">
        {services.map((service, index) => (
          <li key={index} className="text-gray-700">{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
