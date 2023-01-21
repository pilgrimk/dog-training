import React, { useEffect } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import shortid from 'shortid'
import data from '../../../constants/data'
import './USCA.css'

const USCA = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  const EventDetailCard = ({ event }) => (
    <div className='app__eventdetail_event-card'>
      {(event.imgURLs) &&
        <div className='app__eventdetail_image-container'>
          {event.imgURLs.map((image) =>
            <img
              key={shortid.generate()}
              className='app__eventdetail_image'
              src={image}
              alt='img' />
          )}
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
              <Typography
                key={shortid.generate()}
                className='app__eventdetail_data_text'
              >
                {item}
              </Typography>
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
  );

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='app__usca app__bg'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.mainInfo} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.competitors} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.trialField} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.drawNight} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.helperTryOuts} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.tracking} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.hotelLodging} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.application} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.sponsorsVendors} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.trophies} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <EventDetailCard event={data.uscaData.contactInfo} />
          </Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default USCA