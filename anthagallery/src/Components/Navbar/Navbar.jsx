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
                    // position: 'fixed',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                    backgroundColor: 'white',
                    height: '116px'
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1440px', px: '100px' }}>
                        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ maxWidth: { md: '35px', xl: '50px' }, width: '100%', borderRadius: '50%' }} component={'img'} src={Logo} />
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ color: '#FFD12D', fontSize: { md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Antha</Typography>
                                <Typography sx={{ color: 'black', fontSize: { md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Gallery</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '28px' }}>
                            <Button variant='outlined' sx={{ color: 'black' }}>Login</Button>
                            <Button variant='contained' color='success'>Register</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Navbar