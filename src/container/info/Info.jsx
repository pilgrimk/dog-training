import React from 'react'
import data from '../../constants/data'
import { InfoObject } from '../../components'
import './Info.css'

const Info = () => {
  return (
    <div className='app__info app__bg flex__center section__padding' id='info'>
      <div className='app__info-container'>
        {data.infoObjs.map((elem) => (
          <div className='app__info-container_item' key={elem.id}>
            <InfoObject
              title={elem.topLine}
              header={elem.headline}
              desc={elem.description}
              buttonLabel={elem.buttonLabel}
              url={elem.imgUrl}
              alt={elem.alt}
              reverse={elem.reverse}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Info