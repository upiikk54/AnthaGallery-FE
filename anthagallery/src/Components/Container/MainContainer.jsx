import React from 'react'
import { Box } from '@mui/material'

function MainContainer(props) {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ ml: { md: '70px', sm: '50px', xs: '16px' }, maxWidth: '1440px', mr: props.right ? props.right : { md: '70px', sm: '50px', xs: '16px' } }}>
                    {props.children}
                </Box>
            </Box>
        </>
    )
}

export default MainContainer