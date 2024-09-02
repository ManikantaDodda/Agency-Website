import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Brands",
    link: "/#brands",
  },
  {
    id: 4,
    name: "Testimonials",
    link: "/#testimonials",
  },
  {
    id: 5,
    name: "Team",
    link: "/#ourteam",
  },
  {
    id: 6,
    name: "Pricing",
    link: "/#pricing",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="w-full bg-white dark:bg-black dark:text-white shadow-lg z-100">
      <div className="container py-3 md:py-2  shadow-lg">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img src={Logo} alt="Logo" className="w-5" />
            <span className="text-2xl sm:text-3xl font-semibold">
              Digital agency
            </span>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Get in Touch</button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
      <Outlet />
    </div>
  );
};

export default Navbar;
