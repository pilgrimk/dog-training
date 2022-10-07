import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer section__padding' id='contact'>
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">123 Main Street, Yourtown, SC 12345, USA</p>
          <p className="p__opensans">+1 212-345-6478</p>
          <p className="p__opensans">+1 212-456-7890</p>
        </div>

        <div className='app__footer-links_logo'>
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>08:00 am - 12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00 am - 11:00 pm</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>2022 Dog Training. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer