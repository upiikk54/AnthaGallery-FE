import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Navbar from '../../Components/Navbar/Navbar'
import { Box } from '@mui/material'
import CategoryProduct from '../../Components/CategoryProduct/CategoryProduct'
import Footer from '../../Components/Footer/Footer'


function LandingPage() {
    return (
        <>
            <Box>
                <Box>
                    <Navbar />
                </Box>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <CategoryProduct />
                </Box>
                <Box>
                    <Footer />
                </Box>
            </Box>
        </>
    )
}

export default LandingPage