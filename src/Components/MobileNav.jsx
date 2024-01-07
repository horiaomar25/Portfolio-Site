import { HashLink as Link } from "react-router-hash-link";

const MobileNav = () => {
  return (
    <nav className="sm:flex sm:flex-col sm:w-full sm:items-center sm:justify-center sm:text-center sm:text-xl sm:overflow-hidden sm:mt-4 sm:shadow-nav-shadow">
      <Link
        smooth
        to="#about"
        className="block mb-2 hover:bg-light-turquoise hover:rounded-lg hover:underline  sm:overflow-hidden"
      >
        About
      </Link>
      <Link
        smooth
        to="#skills"
        className="block mb-2 hover:bg-light-turquoise hover:rounded-lg hover:underline sm:overflow-hidden"
      >
        Skills
      </Link>
      <Link
        smooth
        to="#projects"
        className="block mb-2 hover:bg-light-turquoise hover:rounded-lg hover:underline sm:overflow-hidden"
      >
        Projects
      </Link>
    </nav>
  );
};

export default MobileNav;
