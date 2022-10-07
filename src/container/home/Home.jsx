import React from 'react'
import './Home.css'
import { dogsPlaying } from '../../constants'

const Home = () => {
  return (
    <div className='app__home app__bg flex__center' id='home'>
      <div className='app__home-video'>
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

export default Home