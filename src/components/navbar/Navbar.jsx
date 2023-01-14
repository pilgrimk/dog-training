import React, { useState } from 'react'
import { Link as LinkS } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiBone } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll';
import './Navbar.css'

const Navbar = () => {
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const [toggleMenu, setToggleMenu] = useState(false);

  const scrollToAnchor = (anchor) => {
    scroller.scrollTo(anchor, {
      duration: 500,
      smooth: true,
      exact: true
    });
  };

  const goToHomeAndScroll = async (anchor) => {
    //scroll to anchor is not working !!
    navigate('/home');
    //scrollToAnchor(anchor);
  };

  const handleScroll = (anchor) => {
    setToggleMenu(false);
    if (location === 'home') {
      scrollToAnchor(anchor);
    }
    else {
      goToHomeAndScroll(anchor);
    }
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <p className='app__navbar-logo_title'>NBSC</p>
      </div>
      <ul className='app__navbar-links'>
        <LinkS
          className='p__opensans app__navbar-link_item'
          to='hero'
          onClick={() => handleScroll('hero')}
        >
          Home
        </LinkS>
        {(location === 'home') &&
          <React.Fragment>
            <LinkS
              className='p__opensans app__navbar-link_item'
              to='info'
              onClick={() => handleScroll('info')}
            >
              Info
            </LinkS>
            <LinkS
              className='p__opensans app__navbar-link_item'
              to='events'
              onClick={() => handleScroll('events')}
            >
              Events
            </LinkS>
            <LinkS
              className='p__opensans app__navbar-link_item'
              to='about'
              onClick={() => handleScroll('about')}
            >
              About
            </LinkS>
            <LinkS
              className='p__opensans app__navbar-link_item'
              to='contact'
              onClick={() => handleScroll('contact')}
            >
              Contact
            </LinkS>
          </React.Fragment>
        }
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
                to='hero'
                onClick={() => handleScroll('hero')}
              >
                Home
              </LinkS>
              {(location === 'home') &&
                <React.Fragment>
                  <LinkS
                    className='app__navbar-smallscreen_link_items'
                    to='info'
                    onClick={() => handleScroll('info')}
                  >
                    Info
                  </LinkS>
                  <LinkS
                    className='app__navbar-smallscreen_link_items'
                    to='events'
                    onClick={() => handleScroll('events')}
                  >
                    Events
                  </LinkS>
                  <LinkS
                    className='app__navbar-smallscreen_link_items'
                    to='about'
                    onClick={() => handleScroll('about')}
                  >
                    About
                  </LinkS>
                  <LinkS
                    className='app__navbar-smallscreen_link_items'
                    to='contact'
                    onClick={() => handleScroll('contact')}
                  >
                    Contact Us
                  </LinkS>
                </React.Fragment>
              }
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
