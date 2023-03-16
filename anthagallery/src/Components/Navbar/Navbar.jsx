import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Logo from '../../Assets/LogoCompany/AnthaGallery.jpeg'

function Navbar() {
    const [scrolls, setScrolls] = React.useState(false)
    const scrolled = () => {
        window.scrollY >= 1 ? setScrolls(true) : setScrolls(false)
    }
    window.addEventListener('scroll', scrolled)
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '1440px',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                    backgroundColor: 'white',
                    height: {xs: '60px',sm: '65px',md: '80px', xl: '116px'}
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1440px', px: {xs: '10px', sm: '100px'} }}>
                        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ maxWidth: {xs:'20px', md: '35px', xl: '50px', sm: '30px' }, width: '100%', borderRadius: '50%' }} component={'img'} src={Logo} />
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ color: '#FFD12D', fontSize: {xs: '15px', md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Antha</Typography>
                                <Typography sx={{ color: 'black', fontSize: { xs: '15px', md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Gallery</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: {xs: '5px',sm: '10px', md: '28px'} }}>
                            <Button variant='outlined' sx={{ color: 'black', fontSize: {xs: '7px', sm: '10px',md: '13px', xl: '16px'}, width: '100%' }}>Login</Button>
                            <Button variant='contained' color='success' sx={{ fontSize: {xs: '7px',sm: '10px',md: '13px', xl: '16px'}, width: '100%'}}>Register</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Navbar