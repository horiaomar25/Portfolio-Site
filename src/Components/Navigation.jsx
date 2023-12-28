import MenuIcon from "../assets/nav-icon.png";
import { useState } from "react";
import { Link } from 'react-router-dom';

import MobileNav from "./MobileNav";

const Navigation = () => {
  const[nav,setNav]=useState(false);

  const handleClick=()=>{
    setNav(!nav);
  }
  return (
    <>
   <header className="header" >
    <h2 className="logo">Horia.</h2>
  
    <img  onClick={handleClick}src={MenuIcon} alt="menu" width={100} height={60}  className="mobile_nav_icon" />
        <nav
        className= 'nav'
        >
          <Link to="/" className="nav_style">
      Home
        </Link>
       <Link to="/about" className="nav_style">
          About
        </Link>
        <Link to="/skills" className="nav_style">
          Skills
        </Link>
        <Link to="/projects" className="nav_style">
          Projects
        </Link>
        </nav>
    
      
      </header>
      {nav && (
        <div>
          {/* Pass a callback to close MobileNav when needed */}
          <MobileNav onClose={() => setNav(false)} />
        </div>
      )}
    </>
  );
};

export default Navigation;
