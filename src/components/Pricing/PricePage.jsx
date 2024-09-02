import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";
const plans = [
  {
    index: 0,
    name: "Basic",
    price: "US $499",
    features: [
      "Fully responsive on all screens",
      "Design + Development",
      "Private communication channel",
      "1-3 days turnaround time",
    ],
    description:
      "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Premium",
    price: "US $1299",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "24-hour support response time",
      "Private communication channel",
      "3-5 days turnaround time",
    ],
    description:
      "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Enterprise",
    feature: "Contact Us",
    price: "Let's Talk!",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "Unlimited Revisions",
      "24-hour support response time",
      "Private communication channel",
      "Priority Development Queue",
      "Dedicated Project Manager",
    ],
    description:
      "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <>
    <span id="pricing"></span>
    <div className="p-4 mx-auto w-full pt-20 md:pt-32 relative z-10" >
      <div className="flex flex-col items-center justify-center" >
        {/* Title */}
        <div className="text-5xl pb-10 md:pb-20 text-center ">
          Simple Pricing <br /> Choose your plan
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 pb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6 py-6 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-900"
            >
              {/* Plan Header */}
              <div className="text-center">
                <div className="text-4xl font-medium mb-4 text-gray-800 dark:text-white">
                  {plan.name}
                </div>
                <div className="text-3xl pt-6 text-gray-700 dark:text-white">
                  {plan.price}
                </div>
                <div className="py-6 text-gray-500 dark:text-gray-300">
                  {plan.description}
                </div>
              </div>

              {/* Features List */}
              <ul className="mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-lg py-2 flex items-center text-gray-600 dark:text-gray-200"
                  >
                    {plan.feature === "Contact Us" ? (
                      <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                    ) : (
                      <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-auto">
                {index === 0 && (
                  <a
                    href="https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
                    className="rounded-3xl py-2 text-white w-full flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300 hover:bg-gradient-to-l hover:from-blue-300 hover:to-emerald-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    {plan.button}
                  </a>
                )}
                {index === 1 && (
                  <a
                    href="https://buy.stripe.com/14k2b65ZQ8tf5Ve28c"
                    className="rounded-3xl py-2 text-white w-full flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300 hover:bg-gradient-to-l hover:from-blue-300 hover:to-emerald-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    {plan.button}
                  </a>
                )}
                {index === 2 && (
                  <a
                    href="/contact"
                    className="rounded-3xl py-2 text-white w-full flex justify-center bg-gradient-to-r from-purple-500 to-blue-300 hover:bg-gradient-to-l hover:from-blue-300 hover:to-purple-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    {plan.button}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Pricing;
