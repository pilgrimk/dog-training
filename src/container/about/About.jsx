import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import data from '../../constants/data'
import shortid from 'shortid'
import './About.css'

const About = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

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
          <div className='app__about-images'>
            <div className='app__about-images-container' ref={scrollRef}>
              {data.aboutUs.images.map((image, index) =>
                <div
                  className='app__about-images_card flex__center'
                  key={`about_image-${index + 1}`}
                >
                  <img src={image} alt='event-detail' />
                </div>
              )}
            </div>
            {(data.aboutUs.scrollImages) &&
              <div className='app__about-images_arrows'>
                <BsArrowLeftShort className='about__arrow-icon' onClick={() => scroll('left')} />
                <BsArrowRightShort className='about__arrow-icon' onClick={() => scroll('right')} />
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default About