import React, { useState } from 'react'
import { Link as LinkS } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiBone } from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <p className='app__navbar-logo_title'>Dog Training</p>
      </div>
      <ul className='app__navbar-links'>
        <LinkS
          className='p__opensans app__navbar-link_item'
          to='home'
          smooth={true}
          duration={500}
          exact='true'
        >
          Home
        </LinkS>
        <LinkS
          className='p__opensans app__navbar-link_item'
          to='info'
          smooth={true}
          duration={500}
          exact='true'
        >
          Info
        </LinkS>
        <LinkS
          className='p__opensans app__navbar-link_item'
          to='events'
          smooth={true}
          duration={500}
          exact='true'
        >
          Events
        </LinkS>
        <LinkS
          className='p__opensans app__navbar-link_item'
          to='about'
          smooth={true}
          duration={500}
          exact='true'
        >
          About
        </LinkS>
        <LinkS
          className='p__opensans app__navbar-link_item'
          to='contact'
          smooth={true}
          duration={500}
          exact='true'
        >
          Contact
        </LinkS>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <BiBone
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='p__opensans'><a href='#info' onClick={() => setToggleMenu(false)}>Info</a></li>
              <li className='p__opensans'><a href='#events' onClick={() => setToggleMenu(false)}>Events</a></li>
              <li className='p__opensans'><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
              <li className='p__opensans'><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
