import { Box } from '@mui/material'
import React from 'react'
import DetailProduct from '../../Components/DetailProduct/DetailProduct'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

function DetailProductPages() {
    return (
        <>
            <Box>
                <Navbar />
            </Box>
            <Box>
                <DetailProduct />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}

export default DetailProductPages