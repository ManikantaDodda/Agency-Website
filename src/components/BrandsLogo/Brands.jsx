import React from "react";
import Brand1 from "../../assets/brands/1.svg";
import Brand2 from "../../assets/brands/2.svg";
import Brand3 from "../../assets/brands/3.svg";
import Brand4 from "../../assets/brands/4.svg";
import Brand5 from "../../assets/brands/5.svg";

const logos = [
  { image: Brand1 },
  { image: Brand2 },
  { image: Brand3 },
  { image: Brand4 },
  { image: Brand5 },
  { image: Brand1 },
];

const Brands = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-14">
      <div className="container mx-auto px-4"  data-aos="fade-up">
        {/* Title Section */}
        <div className="text-center mb-10" >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200">
            The best brands <br /> choose us
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto">
            From small businesses to large corporations, we have helped many brands elevate their business.
          </p>
        </div>

        {/* Logo Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center mb-10">
          {logos.map((logo, index) => (
            <div key={index} className="p-4 transform transition-transform duration-300 hover:scale-105">
              <img
                src={logo.image}
                alt={`Brand logo ${index + 1}`}
                className="w-full h-auto max-w-xs rounded-lg"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Brands;
