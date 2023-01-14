import React from 'react'
import { Link } from 'react-router-dom'
import './Events.css'
import data from '../../constants/data'

const Events = () => {

  const EventCard = ({ event: { title, dates, linkURL, imgURL } }) => (
    <div className='app__events_event-card'>
      <img src={imgURL} alt='event' />
      <div className='app__events_event-card_content'>
        <p className='.p__opensans'>{dates}</p>
        {(linkURL) ? (
          <Link className='.p__opensans 
          app__events_event-card_content_link'
            to={linkURL}>{title}</Link>
        ) : (
          <p className='.p__opensans'>{title}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className='app__events app__bg flex__center section__padding' id='events'>
      <div className='app__events-container'>
        <h1 className='headtext__neuton'>{data.events.title}</h1>
        <p className='p__opensans'>{data.events.desc}</p>
        {data.events.data.map((event) =>
          <EventCard event={event} key={event.id} />
        )}
      </div>
    </div>
  )
}

export default Events