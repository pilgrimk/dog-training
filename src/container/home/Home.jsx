import React from 'react'
import './Home.css'
import { HeroSection, Info, About, Events} from '../index'

const Home = () => {
  return (
    <div className='app__home-container' id='home'>
        <HeroSection />
        <Info />
        <Events />
        <About />
    </div>
  )
}

export default Home