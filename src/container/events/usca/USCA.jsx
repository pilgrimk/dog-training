import React, { useEffect } from 'react'
import { Grid, Paper } from '@mui/material'
import { EventDetailCard } from '../../../components'
import { styled } from '@mui/material/styles'
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