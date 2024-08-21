import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink as HashLink } from "react-router-hash-link";

const NewNav = () => {
  // State to open and close mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/** Mobile Navigation */}
          {menuOpen && (
            <div
              className="fixed inset-0 flex flex-col justify-center items-center z-50 bg-turquoise"
              onClick={closeMenu}
            >
              <ul
                className="menu menu-sm p-2 shadow h-screen w-screen flex flex-col justify-center items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 text-black text-5xl font-bold"
                >
                  &times;
                </button>
                <li
                  className="text-black text-4xl font-semibold mt-8"
                  onClick={closeMenu}
                >
                  <Link to="/" className="text-2xl">
                    Home
                  </Link>
                </li>
                <li
                  className="text-black text-4xl font-semibold mt-8"
                  onClick={closeMenu}
                >
                  <Link to="/about" className="text-2xl">
                    About
                  </Link>
                </li>
                <li
                  className="text-black text-4xl font-semibold mt-8"
                  onClick={closeMenu}
                >
                  <Link to="/skills" className="text-2xl">
                    Skills
                  </Link>
                </li>
                <li
                  className="text-black text-4xl font-semibold mt-8"
                  onClick={closeMenu}
                >
                  <HashLink smooth to="#projects" className="text-2xl">
                    Projects
                  </HashLink>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/** Desktop Navigation */}
       <a className="btn btn-ghost text-4xl text-white font-extrabold">Horia.</a>
     </div>
     <div className="navbar-center hidden lg:flex">
       <ul className="menu menu-horizontal px-1">
         <li className='text-white text-2xl font-extrabold hover:text-turquoise hover:underline'><Link to="/">Home</Link></li>
         <li className='text-white text-2xl font-extrabold hover:text-turquoise hover:underline'><Link to="/about">About</Link></li>
         <li className='text-white text-2xl font-extrabold hover:text-turquoise hover:underline'><Link to="/skills">Skills</Link></li>
         <li className='text-white text-2xl font-extrabold hover:text-turquoise hover:underline'><HashLink smooth to="#projects">Projects</HashLink></li>
       </ul>
     </div>
     <div className="navbar-end">
       {/* Additional content can go here */}
     </div>
    </div>
  );
};

export default NewNav;



