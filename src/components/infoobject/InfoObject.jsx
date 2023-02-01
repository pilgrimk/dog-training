import React from 'react'
import './InfoObject.css'

const InfoObject = ({ infoItem }) => {
  return (
    <div className='app__infoobj flex__center'>
      <div className='app__infoobj-container'>
        <div className='app__infoobj-content'>
          <h4>{infoItem.topLine}</h4>
          <h1 className='headtext__neuton'>{infoItem.headline}</h1>
          <p className='p__opensans'>{infoItem.description}</p>
          {(infoItem.buttonLabel) &&
            <button type='button' className='custom__button' >{infoItem.buttonLabel}</button>
          }
        </div>
        <div className='app__infoobj-img'>
          <img src={infoItem.imgUrl} alt={infoItem.alt} />
        </div>
      </div>
    </div>
  )
}

export default InfoObject