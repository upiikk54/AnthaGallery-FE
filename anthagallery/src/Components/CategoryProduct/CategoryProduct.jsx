import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import tas from '../../Assets/Category/tas.png'

function CategoryProduct() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', ml: '135px', mr: '135px', mt: '84px', width: '100%',
                    maxWidth: '1440px',
                }}>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1440px', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '38px', fontFamily: 'Axiforma' }}>Explore Category</Typography>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px', fontFamily: 'Axiforma' }}>See All</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', mt: '107px', flexWrap: 'wrap', width: '100%', maxWidth: '1440px', }}>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#698269', borderRadius: '16px', height: 338, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ maxWidth: '164px', width: '100%', position: 'absolute', top: '-49px', }} component={'img'} src={tas} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '248px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma', color: 'white' }}>Backpack</Typography>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#698269', borderRadius: '16px', height: 338, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ maxWidth: '164px', width: '100%', position: 'absolute', top: '-49px', }} component={'img'} src={tas} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '248px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma', color: 'white' }}>Shoes</Typography>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#698269', borderRadius: '16px', height: 338, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ maxWidth: '164px', width: '100%', position: 'absolute', top: '-49px', }} component={'img'} src={tas} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '248px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma', color: 'white' }}>Jacket</Typography>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#698269', borderRadius: '16px', height: 338, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ maxWidth: '164px', width: '100%', position: 'absolute', top: '-49px', }} component={'img'} src={tas} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '248px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma', color: 'white' }}>T-Shirt</Typography>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#698269', borderRadius: '16px', height: 338, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ maxWidth: '164px', width: '100%', position: 'absolute', top: '-49px', }} component={'img'} src={tas} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '248px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma', color: 'white' }}>Hat</Typography>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#698269', borderRadius: '16px', height: 338, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ maxWidth: '164px', width: '100%', position: 'absolute', top: '-49px', }} component={'img'} src={tas} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '248px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma', color: 'white' }}>Watch</Typography>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#698269', borderRadius: '16px', height: 338, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ maxWidth: '164px', width: '100%', position: 'absolute', top: '-49px', }} component={'img'} src={tas} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '248px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma', color: 'white' }}>Lipstick</Typography>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ minWidth: 270, backgroundColor: '#698269', borderRadius: '16px', height: 338, }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ maxWidth: '164px', width: '100%', position: 'absolute', top: '-49px', }} component={'img'} src={tas} />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: '248px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma', color: 'white' }}>Glasses</Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CategoryProduct