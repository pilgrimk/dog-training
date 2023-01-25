import React from 'react'
import { IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import shortid from 'shortid'
import data from '../../constants/data'
import './Footer.css'

const Footer = () => {
  const getLinkedIcon = (title) => {
    switch (title) {
      case 'Instagram':
        return <InstagramIcon />;
      case 'Twitter':
        return <TwitterIcon />;
      case 'LinkedIn':
        return <LinkedInIcon />;
      default:
        return <FacebookIcon />;
    }
  };

  return (
    <div className='app__footer section__padding' id='contact'>
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className="app__footer-headtext">{data.contactUs.title_cu}</h1>
          <p className="p__opensans">{data.contactUs.addr}, {data.contactUs.city}, {data.contactUs.state_short} {data.contactUs.postal_code}, {data.contactUs.country}</p>
          <p className="p__opensans">{data.contactUs.phone_1}</p>
          <p className="p__opensans">{data.contactUs.phone_2}</p>
        </div>

        {(data.contactUs.social_media) &&
          <div className='app__footer-links_logo'>
            <div className='app__footer-links_icons'>
              {data.contactUs.social_media.map((media) => (
                <IconButton
                  key={shortid.generate()}
                  aria-label={media.title}
                  href={media.link}>
                  {getLinkedIcon(media.title)}
                </IconButton>
              ))}
            </div>
          </div>
        }

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>{data.contactUs.title_wh}</h1>
          <p className='p__opensans'>{data.contactUs.days_1}</p>
          <p className='p__opensans'>{data.contactUs.hours_1}</p>
          <p className='p__opensans'>{data.contactUs.days_2}</p>
          <p className='p__opensans'>{data.contactUs.hours_2}</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>2022 {data.contactUs.name_short}. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer