// src/components/TestimonialCarousel.js
import React, { useState } from 'react';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4 max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-2">Client Testimonials</h3>
      <div className="flex items-center justify-between">
        <button onClick={handlePrevious} className="text-gray-500 hover:text-gray-800">&lt;</button>
        <div className="flex-1 mx-4">
          <p className="text-gray-700">{testimonials[currentIndex]}</p>
        </div>
        <button onClick={handleNext} className="text-gray-500 hover:text-gray-800">&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
