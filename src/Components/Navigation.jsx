import MenuIcon from "../assets/hamburger.png";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

import MobileNav from "./MobileNav";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <BrowserRouter>
        <header className="flex shadow-nav-shadow sm:flex sm:flex-col">
          <div className="flex items-center justify-between w-full sm:w-auto lg:w-auto px-4 py-3">
            <div className="flex justify-start lg:mr-96">
              <img
                src="https://see.fontimg.com/api/renderfont4/0W2DR/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/SG9yaWEg/januari-awal.png"
                alt="logo"
                width={120}
                className="m-5"
              />
            </div>
            {/* Mobile Menu Icon */}
            <img
              onClick={handleClick}
              src={MenuIcon}
              alt="menu"
              width={40}
              height={40}
              className="lg:hidden cursor-pointer "
            />
          </div>

          <nav
            className=" sm:hidden md:hidden  lg:flex font-poppins text-lg justify-center items-center p-5 m-0"
          >
            <Link
              smooth
              to="#about"
              className="mr-4 hover:bg-light-turquoise hover:rounded-lg hover:underline"
            >
              About
            </Link>
            <Link
              smooth
              to="#skills"
              className="mr-4 hover:bg-light-turquoise hover:rounded-lg hover:underline"
            >
              Skills
            </Link>
            <Link
              smooth
              to="#projects"
              className="mr-4 hover:bg-light-turquoise hover:rounded-lg hover:underline"
            >
              Projects
            </Link>
          </nav>
        </header> 
        {nav && <MobileNav onClose={() => setNav(false)} />}
      </BrowserRouter>

     
    </>
  );
};

export default Navigation;
