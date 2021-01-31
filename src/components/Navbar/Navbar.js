import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './Dropdown';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ATC
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? 
            <FaTimes /> :
            <FaBars />
          }
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link 
              to='/' 
              className='nav-links' 
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/info'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              More Info
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/stories'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Personal Stories
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;