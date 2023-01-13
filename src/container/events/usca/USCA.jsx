import React, { useEffect } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import shortid from 'shortid'
import data from '../../../constants/data'
import images from '../../../constants/images'
import './USCA.css'

const USCA = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  const EventDetailCard = ({ event: { title, data } }) => (
    <div className='app__eventdetail_event-card'>
      <div className='app__eventdetail_title'>
        <Typography
          className='app__eventdetail_title_text'
        >
          {title}
        </Typography>
      </div>
      <div className='app__eventdetail_data'>
        {data.map((item) =>
          <Typography
            key={shortid.generate()}
            className='app__eventdetail_data_text'
          >
            {item}
          </Typography>
        )}
      </div>
    </div>
  );

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='app__usca app__bg'>
      <Grid container spacing={2}>
        <div container className='app__usca__main_info'>
          <div className='app__usca-logo-container'>
            <Item>
              <img className='app__usca-logo' src={images.uscalogo} alt='logo' />
            </Item>
          </div>
          <div className='app__usca-content-container'>
            <Item>
              <EventDetailCard event={data.uscaData.mainInfo} />
            </Item>
          </div>
        </div>
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