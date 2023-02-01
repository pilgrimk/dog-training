import React, { useEffect } from 'react'
import { Grid, Paper } from '@mui/material'
import { EventDetailCard } from '../../components'
import { styled } from '@mui/material/styles'
import data from '../../constants/data'
import shortid from 'shortid'
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
        {data.uscaData.map((eventItem) =>
          <Grid item xs={12} key={shortid.generate()}>
            <Item>
              <EventDetailCard event={eventItem} />
            </Item>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default USCA