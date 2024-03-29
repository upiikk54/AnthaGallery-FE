import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import facebook from '../../Assets/IconFooter/Facebook.png'
import twitter from '../../Assets/IconFooter/Twitter.png'
import linkedin from '../../Assets/IconFooter/Linkedln.png'
import insta from '../../Assets/IconFooter/Instagram.png'

function Footer() {
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
                    backgroundColor: 'black',
                    mt: { xs: '50px', sm: '80px', md: '148px', xl: '150px' },
                    height: '100%',
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1440px', px: { xs: '16px', sm: '100px' }, flexWrap: 'wrap', mb: '100px', mt: '20px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '287px', gap: { xs: '14px', sm: '20px' } }}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ color: '#FFD12D', fontSize: { xs: '15px', md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Antha</Typography>
                                <Typography sx={{ color: 'white', fontSize: { xs: '15px', md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Gallery</Typography>
                            </Box>
                            <Typography sx={{ maxWidth: '287px', color: 'white', fontSize: '14px', fontWeight: 400, fontFamily: 'Axiforma' }}>Our fashion specializes in premium, elegant and modern clothing and accessories. With talented designers and years of experience, we create high-quality products that meet the highest industry standart</Typography>
                            <Box sx={{ display: 'flex', gap: '28px' }}>
                                <Link href="https://www.instagram.com/anthagallery.id/" sx={{ textDecoration: 'none', color: 'black' }}>
                                    <Box sx={{ maxWidth: '24px', cursor: 'pointer', maxHeight: '24px' }} component={'img'} src={insta} />
                                </Link>
                                <Link href="https://twitter.com/AnTGrup16" sx={{ textDecoration: 'none', color: 'black' }}>
                                    <Box sx={{ maxWidth: '24px', cursor: 'pointer', maxHeight: '24px' }} component={'img'} src={twitter} />
                                </Link>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '14px', sm: '20px' }, width: '270px', pt: { xs: '25px', sm: 'unset' } }}>
                            <Typography sx={{ color: 'white', fontSize: { md: '15px', xl: '20px' }, fontWeight: 600, lineHeight: '28px', fontFamily: 'Axiforma' }}>Map Location</Typography>
                            <div className="mapouter">
                                <div className="gmap_canvas" >
                                    <iframe title='maps' style={{ borderRadius: '16px', maxWidth: '100%', maxHeight: '100%' }} id="gmap_canvas" src="https://maps.google.com/maps?q=antha%20gallery&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    <a href="https://2piratebay.org"> </a>
                                    <br />
                                </div>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer