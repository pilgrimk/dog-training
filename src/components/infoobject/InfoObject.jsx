import React from 'react'
import './InfoObject.css'

const InfoObject = ({
  title,
  header,
  desc,
  buttonLabel,
  url,
  alt,
  reverse
}) => {
  return (
    <div className='app__infoobj flex__center'>
      <div className='app__infoobj-container'>
        <div className='app__infoobj-content'>
          <h4>{title}</h4>
          <h1 className='headtext__neuton'>{header}</h1>
          <p className='p__opensans'>{desc}</p>
          <button type='button' className='custom__button' >{buttonLabel}</button>
        </div>

        <div className='app__infoobj-img'>
          <img src={url} alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default InfoObject