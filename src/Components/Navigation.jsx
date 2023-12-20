import MenuIcon from "../assets/nav-icon.png";

const Navigation = () => {
  return (
    <>
   <header className="header" >
    <h2 className="logo">Horia.</h2>
  
    <img src={MenuIcon} alt="menu" width={100} height={60}  className="mobile_nav" />
        <nav
        className= 'nav'
        >
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
        </nav>
    
      </header>
    </>
  );
};

export default Navigation;
