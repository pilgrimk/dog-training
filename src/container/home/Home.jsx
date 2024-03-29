import React from 'react'
import './Home.css'
import { HeroSection, Info, About, Events, Footer} from '../index'

const Home = () => {
  return (
    <div className='app__home-container' id='home'>
        <HeroSection />
        <Info />
        <About />
        <Events />
        <Footer />
    </div>
  )
}

export default Home