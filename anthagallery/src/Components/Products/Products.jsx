import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import tas1 from '../../Assets/product/tas1.png'

function Products() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', ml: { xs: '38px', sm: '135px' }, mr: { xs: '38px', sm: '135px' }, mt: '58px', width: '100%',
                    maxWidth: '1440px',
                }}>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontWeight: 400, fontSize: { xs: '12px', sm: '16px' }, fontFamily: 'Axiforma' }}>Home / </Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: { xs: '12px', sm: '16px' }, fontFamily: 'Axiforma', color: '#698269' }}>Backpack</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontWeight: '600', fontSize: { xs: '16px', sm: '24px' }, fontFamily: 'Axiforma', mt: '36px' }}>Backpack Collection</Typography>
                    <Box sx={{ display: 'flex', gap: {xs: '15px', sm: '25px', md: '30px' }, mt: '20px', flexWrap: 'wrap', width: '100%', maxWidth: '1440px', }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: {xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: {xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: {xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: {xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: {xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: {xs: '8px', sm: '20px'} }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: {xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: {xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: {xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: {xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: {xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: {xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: {xs: '8px', sm: '20px'} }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: {xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: {xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: {xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: {xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: {xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: {xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: {xs: '8px', sm: '20px'} }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: {xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: {xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: {xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: {xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: {xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: {xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: {xs: '8px', sm: '20px'} }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: {xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: {xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: {xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: {xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: {xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: {xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: {xs: '8px', sm: '20px'} }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: {xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: {xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: {xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: {xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: {xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: {xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: {xs: '8px', sm: '20px'} }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: {xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: {xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: {xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: {xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: {xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: {xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: {xs: '8px', sm: '20px'} }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: {xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: {xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: {xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: {xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: {xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' } }}>
                                <Typography sx={{ fontWeight: 600, fontSize: {xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: {xs: '8px', sm: '20px'} }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: {xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Products