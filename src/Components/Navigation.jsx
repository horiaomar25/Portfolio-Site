import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { HashLink as HashLink} from "react-router-hash-link";

const NewNav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start  flex flex-col">
        <div className="flex w-full justify-between items-center">
          
          <div
            role="button"
            className="btn btn-ghost lg:hidden "
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <a className="font-extrabold btn-ghost text-4xl p-4">Horia</a>
        </div>
        {menu && (
          <div className="mobile-menu text-center bg-base-200  flex justify-center items-center z-50 lg:hidden">
            <ul className="flex flex-col items-center">
      <li className="text-center py-4">
        <a className="text-xl font-bold">About</a>
      </li>
      <li className="text-center py-4">
        <a className="text-xl font-bold">Projects</a>
      </li>
      <li className="text-center py-4">
        <a className="text-xl font-bold">Skills</a>
      </li>
    </ul>
          </div>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
            <Link to="/" className="text-2xl font-bold hover:bg-turquoise">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-2xl font-bold hover:bg-turquoise">About</Link>
          </li>
          <li>
            <Link to="/skills" className="text-2xl font-bold hover:bg-turquoise">Skills</Link>
          </li>
          <li>
            <HashLink smooth to="#projects" className="text-2xl font-bold hover:bg-turquoise">Projects</HashLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default NewNav;


