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
                    display: 'flex', flexDirection: 'column', ml: '135px', mr: '135px', mt: '58px', width: '100%',
                    maxWidth: '1440px',
                }}>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontWeight: 400, fontSize: '16px', fontFamily: 'Axiforma' }}>Home / </Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: '16px', fontFamily: 'Axiforma', color: '#698269' }}>Backpack</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontWeight: '600', fontSize: '24px', fontFamily: 'Axiforma', mt: '36px' }}>Backpack Collection</Typography>
                    <Box sx={{ display: 'flex', gap: '30px', mt: '20px', flexWrap: 'wrap', width: '100%', maxWidth: '1440px', }}>
                        <Box sx={{ display: 'flex', maxWidth: '270px', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#E1E6E1', borderRadius: '16px', height: 260, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: '167px', width: '100%', height: '234px', pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', color: 'black', pt: '20px' }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '22px', fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', maxWidth: '270px', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#E1E6E1', borderRadius: '16px', height: 260, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: '167px', width: '100%', height: '234px', pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', color: 'black', pt: '20px' }}>Dog-Blue </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '22px', fontFamily: 'Axiforma', color: 'black' }}>Rp. 200k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', maxWidth: '270px', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#E1E6E1', borderRadius: '16px', height: 260, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: '167px', width: '100%', height: '234px', pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', color: 'black', pt: '20px' }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '22px', fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', maxWidth: '270px', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#E1E6E1', borderRadius: '16px', height: 260, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: '167px', width: '100%', height: '234px', pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', color: 'black', pt: '20px' }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '22px', fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', maxWidth: '270px', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#E1E6E1', borderRadius: '16px', height: 260, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: '167px', width: '100%', height: '234px', pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', color: 'black', pt: '20px' }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '22px', fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', maxWidth: '270px', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#E1E6E1', borderRadius: '16px', height: 260, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: '167px', width: '100%', height: '234px', pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', color: 'black', pt: '20px' }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '22px', fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', maxWidth: '270px', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#E1E6E1', borderRadius: '16px', height: 260, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: '167px', width: '100%', height: '234px', pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', color: 'black', pt: '20px' }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '22px', fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', maxWidth: '270px', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#E1E6E1', borderRadius: '16px', height: 260, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <Box sx={{ maxWidth: '167px', width: '100%', height: '234px', pt: '15px' }} component={'img'} src={tas1} />
                                </Box>
                            </Card>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', color: 'black', pt: '20px' }}>High School White </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '22px', fontFamily: 'Axiforma', color: 'black' }}>Rp. 120k </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Products