import React from 'react'
import { Typography } from '@mui/material'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import shortid from 'shortid'
import './EventDetailCard.css'

const EventDetailCard = ({ event }) => {
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
        <div className='app__eventdetail_event-card'>
            {(event.images) &&
                <div className='app__eventdetail-images'>
                    <div className='app__eventdetail-images-container' ref={scrollRef}>
                        {event.images.map((image, index) =>
                            <div
                                className='app__eventdetail-images_card flex__center'
                                key={`eventdetail_image-${index + 1}`}
                            >
                                <img src={image} alt='event-detail' />
                            </div>
                        )}
                    </div>
                    {(event.scrollImages) &&
                        <div className='app__eventdetail-images_arrows'>
                            <BsArrowLeftShort className='eventdetail__arrow-icon' onClick={() => scroll('left')} />
                            <BsArrowRightShort className='eventdetail__arrow-icon' onClick={() => scroll('right')} />
                        </div>
                    }
                </div>
            }
            <div className='app__eventdetail_content'>
                <div className='app__eventdetail_title'>
                    <Typography
                        className='app__eventdetail_title_text'
                    >
                        {event.title}
                    </Typography>
                </div>
                {(event.data) &&
                    <div className='app__eventdetail_data'>
                        {event.data.map((item) =>
                            <React.Fragment key={shortid.generate()}>
                                {(item.line_break) &&
                                    <br />
                                }
                                {(item.data_subtitle) &&
                                    <Typography
                                        className='app__eventdetail_data_subtitle'
                                    >
                                        {item.data_subtitle}
                                    </Typography>
                                }
                                {(item.line_item) &&
                                    <Typography
                                        className='app__eventdetail_data_text'
                                    >
                                        {item.line_item}
                                    </Typography>
                                }
                            </React.Fragment>
                        )}
                    </div>
                }
                {(event.links) &&
                    <div className='app__eventdetail_data'>
                        {event.links.map((link) =>
                            <p key={shortid.generate()}>
                                {link.desc}
                                <a className='app__eventdetail_link_text'
                                    href={link.href}
                                    rel={link.rel}
                                    target={link.target}
                                >{link.text}
                                </a>
                            </p>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default EventDetailCard