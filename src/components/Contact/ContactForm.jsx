import React, { useState } from "react";
import { motion } from "framer-motion"; // Install using `npm install framer-motion`
import team from "../../assets/website/team2.png";
import Footer from "../Footer/Footer";

const ContactForm = () => {
  const userData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(userData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(userData);
    setSubmitted(false);
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-8 transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        {/* Left Card with Image and Header */}
        <motion.div
          className="flex flex-col md:w-1/2 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 bg-white dark:bg-gray-800"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-full">
            <img src={team} alt="Team" className="w-full h-auto object-cover" />
          </div>
          <div className="p-6">
            <p className="text-lg">
              Our team is here to help you with any questions or inquiries you may have. Get in touch, and let's work together to make great things happen.
            </p>
          </div>
        </motion.div>

        {/* Right Card with Contact Form */}
        <motion.div
          className="rounded-xl shadow-lg overflow-hidden md:w-1/2 transition-transform duration-300 bg-white dark:bg-gray-800"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-8">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block mb-2 text-lg font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block mb-2 text-lg font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block mb-2 text-lg font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      rows="5"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Submit
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Thank You!</h3>
                <p>Your message has been sent successfully.</p>
                <button
                  onClick={handleReset}
                  className="mt-4 text-sm font-medium text-blue-600 bg-blue-100 px-4 py-2 rounded-full inline-block hover:bg-green-600 hover:text-white transition duration-300"
                >
                  Ok!
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
