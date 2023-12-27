import MenuIcon from "../assets/nav-icon.png";
import { useState } from "react";

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
          <a  className="nav_style" href="#">About</a>
          <a className="nav_style" href="#">Skills</a>
          <a className="nav_style" href="#">Projects</a>
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
