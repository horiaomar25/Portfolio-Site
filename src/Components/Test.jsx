import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const Test = () => {
  return (
    <>
    <BrowserRouter>
    <div className="navbar border border-black">
      <div className="flex-none">
        <label htmlFor="my-drawer" className="btn btn-primary m-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <button className="btn btn-square btn-ghost"></button>
      </div>
      <div className="flex-1 justify-center  ">
        <a className="btn btn-ghost text-xl">Horia</a>
      </div>
      
    </div>
    <div className="flex-none">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-6 text-center w-80 min-h-full border border-black bg-turquoise">
            {/* Sidebar content here */}
            <Link
              smooth
              to="#about"
              className="mb-4 hover:bg-light-gray hover:w-full hover:border hover:rounded-lg hover:text-black text-xl"
            >
              About
            </Link>
            <Link
              smooth
              to="#skills"
              className="mb-4 hover:bg-light-gray hover:w-full hover:border hover:rounded-lg hover:text-black text-xl"
            >
              Skills
            </Link>
            <Link
              smooth
              to="#projects"
              className="mb-4 hover:bg-light-gray hover:w-full hover:border hover:rounded-lg hover:text-black text-xl"
            >
              Projects
            </Link>
          </ul>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default Test;
