import { Box, Typography } from '@mui/material'
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
                    backgroundColor: '#698269',
                    mt: { md: '176px', xl: '200px' },
                    height: '100%',
                }}>
                    <Box sx={{ pl: '135px', pr: '135px', pt: '30px', pb: '67px' }}>
                        <Box sx={{ display: 'flex', gap: {md: '45px', xl: '174px'}, flexWrap: 'wrap'}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '287px' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ color: '#FFD12D', fontSize: { md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Antha</Typography>
                                    <Typography sx={{ color: 'white', fontSize: { md: '20px', xl: '24px' }, fontWeight: '39px', lineHeight: '39px', fontFamily: 'Axiforma' }}>Gallery</Typography>
                                </Box>
                                <Box sx={{ pt: '24px' }}>
                                    <Typography sx={{ maxWidth: '287px', color: 'white', fontSize: '14px', fontWeight: 400, fontFamily: 'Axiforma' }}>Our fashion specializes in premium, elegant and modern clothing and accessories. With talented designers and years of experience, we create high-quality products that meet the highest industry standart</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: '28px', pt: '29px' }}>
                                    <Box sx={{ maxWidth: '24px', cursor: 'pointer', maxHeight: '24px' }} component={'img'} src={facebook} />
                                    <Box sx={{ maxWidth: '24px', cursor: 'pointer', maxHeight: '24px' }} component={'img'} src={twitter} />
                                    <Box sx={{ maxWidth: '24px', cursor: 'pointer', maxHeight: '24px' }} component={'img'} src={linkedin} />
                                    <Box sx={{ maxWidth: '24px', cursor: 'pointer', maxHeight: '24px' }} component={'img'} src={insta} />
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '255px', gap: '24px' }}>
                                <Typography sx={{ color: 'white', fontSize: { md: '15px', xl: '20px' }, fontWeight: 600, lineHeight: '28px', fontFamily: 'Axiforma' }}>Pages</Typography>
                                <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                                    <Typography sx={{ color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 400, lineHeight: '24px', fontFamily: 'Axiforma' }}>About Us</Typography>
                                    <Typography sx={{ color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 400, lineHeight: '24px', fontFamily: 'Axiforma' }}>Blog</Typography>
                                    <Typography sx={{ color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 400, lineHeight: '24px', fontFamily: 'Axiforma' }}>Careers</Typography>
                                    <Typography sx={{ color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 400, lineHeight: '24px', fontFamily: 'Axiforma' }}>Contact Us</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '270px' }}>
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
            </Box>
        </>
    )
}

export default Footer