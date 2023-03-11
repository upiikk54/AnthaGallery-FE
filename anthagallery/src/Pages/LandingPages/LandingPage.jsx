import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Navbar from '../../Components/Navbar/Navbar'
import { Box } from '@mui/material'
import CategoryProduct from '../../Components/CategoryProduct/CategoryProduct'


function LandingPage() {
    return (
        <>
            <Box>
                <Navbar />
            </Box>
            <Box>
                <Carousel />
            </Box>
            <Box>
                <CategoryProduct />
            </Box>
        </>
    )
}

export default LandingPage