
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <div className="mobile_nav">
        <div className="mobile-nav__content">
            <ul className="mobile-nav__list">
            <li className="mobile-nav__item">
            <Link to="/" className="mobile-nav__link">Home
        </Link>
                
            </li>
            <li className="mobile-nav__item">
            <Link to="/about" className="mobile-nav__link">About
        </Link>
               
            </li>
            <li className="mobile-nav__item">
            <Link to="/skills" className="mobile-nav__link">Skills
        </Link>
            </li>
            <li className="mobile-nav__item">
            <Link to="/projects" className="mobile-nav__link">Projects
        </Link>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default MobileNav