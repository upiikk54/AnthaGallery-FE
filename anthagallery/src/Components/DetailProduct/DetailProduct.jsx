import { Box, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay } from "swiper";
import foto1 from '../../Assets/Carousel/Carousel1.png';
import whatsapp from '../../Assets/DetailProduct/Whatsapp.png';

function DetailProduct() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', ml: '135px', mr: '135px', mt: '58px', width: '100%',
                    maxWidth: '1440px', gap: '36px'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1440px', }}>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px', fontFamily: 'Axiforma' }}>Backpack / </Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px', fontFamily: 'Axiforma', color: '#698269' }}>Detail Product</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <Box className='swiper-container-detailProduct'>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                pagination={true}
                                navigation={true}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                style={{ maxWidth: '570px', borderRadius: '16px' }}
                                loop={true}
                            >
                                <SwiperSlide style={{ width: '100%', maxHeight: '433px' }}>
                                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: '433px', objectFit: 'cover', objectPosition: 'top' }} />
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '100%', maxHeight: '433px' }}>
                                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: '433px', objectFit: 'cover', objectPosition: 'top' }} />
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '100%', maxHeight: '433px' }}>
                                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: '433px', objectFit: 'cover', objectPosition: 'top' }} />
                                </SwiperSlide>
                            </Swiper>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '93px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                                <Box sx={{ display: 'flex', backgroundColor: '#E1E6E1', width: '170px', height: '46px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: '15px', color: 'black', fontFamily: 'Axiforma', lineHeight: '120%' }}>Backpack Details</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '38px', fontFamily: 'Axiforma' }}>Jacquess Money Bands</Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: '15px', fontFamily: 'Axiforma', maxWidth: '570px', maxHeight: '86px' }}>Introducing our trendy orange tote bag featuring a bold dollar symbol - the perfect accessory for anyone who wants to make </Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: '32px', fontFamily: 'Axiforma' }}>Rp. 1.200K</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#25D366', borderRadius: '16px', width: '570px', height: '78px' }}>
                                <Box sx={{ display: 'flex', gap: '19px', alignItems: 'center' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '24px', fontFamily: 'Axiforma', lineHeight: '24px', color: 'white' }}>Contact Via Whatsapp</Typography>
                                    <Box sx={{ maxWidth: '31px', cursor: 'pointer', maxHeight: '31px' }} component={'img'} src={whatsapp} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailProduct