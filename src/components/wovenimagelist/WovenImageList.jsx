import * as React from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export default function WovenImageList({ images }) {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <ImageList
            sx={{ 
                width: { sm: 400, md: 500 }, 
                maxHeight: 450,
            }}
            variant="woven"
            cols={matchDownMd ? 1 : 3 }
            gap={8}
        >
            {images.map((image, index) => (
                <ImageListItem key={index}>
                    <img
                        src={`${image}?w=161&fit=crop&auto=format`}
                        srcSet={`${image}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={`gallery` + { index }}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}