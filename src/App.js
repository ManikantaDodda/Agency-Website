// src/App.js
import React , {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// Component import
import Hero from "./components/Hero/Hero";

import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";

//import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Brands from './components/BrandsLogo/Brands.jsx';

//pricing
import Pricing from './components/Pricing/PricePage.jsx';
import Team from './components/Team/TeamComponent.jsx';
//for testinomal animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
    <Hero />
    <Services />
    <Testimonial />
    <Brands/>
    <Pricing/>
    <Team/>
    <BlogsComp />
    <Footer />
  </div>
  );
};

export default App;
