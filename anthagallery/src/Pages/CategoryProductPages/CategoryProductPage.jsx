import { Box } from '@mui/material'
import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Products from '../../Components/Products/Products'

function CategoryProductPage() {
    return (
        <>
            <Box>
                <Navbar />
            </Box>
            <Box>
                <Banner />
            </Box>
            <Box>
                <Products />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}

export default CategoryProductPage