import React from 'react'
import { ImageMasonry } from '../../components'
import data from '../../constants/data'
import shortid from 'shortid'
import './About.css'

const About = () => {
  return (
    <div className='app__about app__bg flex__center section__padding' id='about'>
      <div className='app__about-container'>
        <h1 className='headtext__neuton'>{data.aboutUs.title}</h1>
        {data.aboutUs.data.map((info) =>
          <React.Fragment key={shortid.generate()}>
            {(info.line_break) &&
              <br />
            }
            {(info.line_item) &&
              <p className='p__opensans'>{info.line_item}</p>
            }
          </React.Fragment>
        )}
        {(data.aboutUs.images) &&
          <div className='app__about-image-container'>
            <ImageMasonry images={data.aboutUs.images} />
          </div>
        }
      </div>
    </div>
  )
}

export default About