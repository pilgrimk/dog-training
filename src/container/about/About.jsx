import React from 'react'
import data from '../../constants/data'
import './About.css'

const About = () => {
  return (
    <div className='app__about app__bg flex__center section__padding' id='about'>
      <div className='app__about-container'>
        <h1 className='headtext__neuton'>{data.aboutUs.title}</h1>
        <p className='p__opensans'>{data.aboutUs.desc}</p>
      </div>
    </div>
  )
}

export default About