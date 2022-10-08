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
              <LinkS
                className='app__navbar-smallscreen_link_items'
                to='home'
                smooth={true}
                duration={500}
                exact='true'
                onClick={() => setToggleMenu(false)}
              >
                Home
              </LinkS>
              <LinkS
                className='app__navbar-smallscreen_link_items'
                to='info'
                smooth={true}
                duration={500}
                exact='true'
                onClick={() => setToggleMenu(false)}
              >
                Info
              </LinkS>
              <LinkS
                className='app__navbar-smallscreen_link_items'
                to='events'
                smooth={true}
                duration={500}
                exact='true'
                onClick={() => setToggleMenu(false)}
              >
                Events
              </LinkS>
              <LinkS
                className='app__navbar-smallscreen_link_items'
                to='about'
                smooth={true}
                duration={500}
                exact='true'
                onClick={() => setToggleMenu(false)}
              >
                About
              </LinkS>
              <LinkS
                className='app__navbar-smallscreen_link_items'
                to='contact'
                smooth={true}
                duration={500}
                exact='true'
                onClick={() => setToggleMenu(false)}
              >
                Contact Us
              </LinkS>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
