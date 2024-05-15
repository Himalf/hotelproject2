import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/Image/logo.jpg";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const NavItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Book now",
      path: "/book",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
  ];

  return (
    <nav className="bg-mainColor shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <div className="w-fit h-fit rounded-full ml-10">
            <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
          </div>
        </Link>

        <div className="lg:hidden">
          <GiHamburgerMenu
            className="text-3xl cursor-pointer text-white"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`lg:flex ${showMenu ? "block" : "hidden"} mt-4 lg:mt-0`}
        >
          {NavItems.map((val, i) => (
            <Link
              key={i}
              to={val.path}
              className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-white hover:text-green-600 transition duration-300"
            >
              {val.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
