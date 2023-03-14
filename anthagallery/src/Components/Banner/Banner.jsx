import { Box, Typography } from '@mui/material'
import React from 'react'
import banner from '../../Assets/Banner/Banner.png'

function Banner() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{ height: '256px', maxWidth: '1440px', width: '100%', backgroundImage: `url(${banner})` }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Typography sx={{ fontWeight: 600, fontSize: '64px', color: 'white', pt: '90px'}}>Backpack</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Banner