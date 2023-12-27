import React from 'react'

const MobileNav = () => {
  return (
    <div className="mobile_nav">
        <div className="mobile-nav__content">
            <ul className="mobile-nav__list">
            <li className="mobile-nav__item">
                <a href="#about" className="mobile-nav__link">About</a>
            </li>
            <li className="mobile-nav__item">
                <a href="#projects" className="mobile-nav__link">Projects</a>
            </li>
            <li className="mobile-nav__item">
                <a href="#contact" className="mobile-nav__link">Contact</a>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default MobileNav