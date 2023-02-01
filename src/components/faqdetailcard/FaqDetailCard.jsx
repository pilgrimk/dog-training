import React from 'react'
import { Grid, Typography } from '@mui/material'
import shortid from 'shortid'
import './FaqDetailCard.css'

const FaqDetailCard = ({ item }) => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Typography className='app__faqdetail-title'>Question:</Typography>
        <Typography sx={{ m: 2 }}>{item.question}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className='app__faqdetail-title'>Response:</Typography>
        {item.responses.map((response) =>
          <React.Fragment key={shortid.generate()}>
            {(response.line_break) &&
              <br />
            }
            {(response.line_item) &&
              <Typography sx={{ m: 2 }}>
                {response.line_item}
              </Typography>
            }
          </React.Fragment>
        )}
      </Grid>
    </Grid>
  )
}

export default FaqDetailCard