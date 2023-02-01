import React, { useEffect } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FaqDetailCard } from '../../components'
import data from '../../constants/data'
import shortid from 'shortid'
import './FAQ.css'

const FAQ = () => {

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
        <div className='app__faq app__bg'>
            <div className='app__faq-title'>
                {data.faqs.title}
            </div>
            <Grid container spacing={2}>
                {data.faqs.data.map((faqItem) =>
                    <Grid item xs={12} key={shortid.generate()}>
                        <Item>
                            <FaqDetailCard item={faqItem} />
                        </Item>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default FAQ