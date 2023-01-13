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
        <h1 className='headtext__neuton'>Events</h1>
        <p className='p__opensans'>Pretium fusce id velit ut tortor. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Elementum curabitur vitae nunc sed. Vel risus commodo viverra maecenas accumsan lacus vel.</p>
        {data.events.map((event) =>
          <EventCard event={event} key={event.id} />
        )}
      </div>
    </div>
  )
}

export default Events