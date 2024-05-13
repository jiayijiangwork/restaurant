import React from 'react';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';
import images from '../../constants/images'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="home">Home</a></li>
        <li className='p__opensans'><a href="about">About</a></li>
        <li className='p__opensans'><a href="Menu">Menu</a></li>
        <li className='p__opensans'><a href="awards">Awards</a></li>
        <li className='p__opensans'><a href="contact">Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {/* 当togglemenu为true时执行 */}
        {toggleMenu && (
          <div className='app__narbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}></MdOutlineRestaurantMenu>
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'><a href="home">Home</a></li>
              <li className='p__opensans'><a href="about">About</a></li>
              <li className='p__opensans'><a href="Menu">Menu</a></li>
              <li className='p__opensans'><a href="awards">Awards</a></li>
              <li className='p__opensans'><a href="contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
