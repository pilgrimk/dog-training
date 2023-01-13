import React from 'react'
import './HeroSection.css'
import { dogsPlaying } from '../../constants'

const HeroSection = () => {
  return (
    <div className='app__hero app__bg flex__center' id='hero'>
      <div className='app__hero-video'>
        <video 
          src={dogsPlaying}
          type='video/mp4'
          controls={false}
          autoPlay
          playsInline
          loop
          muted
        />
      </div>
    </div>
  )
}

export default HeroSection