import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

export default function ImageMasonry({ images }) {
    return (
        <Box sx={{
            width: { sm: 400, md: 500 },
            minHeight: 500
        }}>
            <Masonry
                columns={{ sm: 1, md: 2, lg: 3}}
                spacing={2}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={`${image}?w=162&auto=format`}
                            srcSet={`${image}?w=162&auto=format&dpr=2 2x`}
                            alt={`gallery` + { index }}
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}