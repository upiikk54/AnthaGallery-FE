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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function DetailProduct() {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const lg = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', ml: '135px', mr: '135px', mt: '58px', width: '100%',
                    maxWidth: '1440px', gap: { xs: '28px', sm: '28px', md: '36px' }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1440px', }}>
                        <Typography sx={{ fontWeight: 400, fontSize: { xs: '14px', sm: '14px', md: '16px' }, fontFamily: 'Axiforma' }}>Backpack / </Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: { xs: '14px', sm: '14px', md: '16px' }, fontFamily: 'Axiforma', color: '#698269' }}>Detail Product</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', flexWrap: { xs: 'wrap', sm: 'unset' } }}>
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
                                style={{ maxWidth: lg ? '570px' : md ? '450px' : '320px', borderRadius: '16px' }}
                                loop={true}
                            >
                                <SwiperSlide style={{ width: '100%', maxHeight: { sm: '210px', md: '362px', xl: '433px' } }}>
                                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: { sm: '210px', md: '362px', xl: '433px' }, objectFit: 'cover', objectPosition: 'top' }} />
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '100%', maxHeight: { sm: '210px', md: '362px', xl: '433px' } }}>
                                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: { sm: '210px', md: '362px', xl: '433px' }, objectFit: 'cover', objectPosition: 'top' }} />
                                </SwiperSlide>
                                <SwiperSlide style={{ width: '100%', maxHeight: { sm: '210px', md: '362px', xl: '433px' } }}>
                                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: { sm: '210px', md: '362px', xl: '433px' }, objectFit: 'cover', objectPosition: 'top' }} />
                                </SwiperSlide>
                            </Swiper>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '32px', sm: '32px', md: '93px' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '8px', sm: '10px', md: '28px' } }}>
                                <Box sx={{ display: 'flex', backgroundColor: '#E1E6E1', width: '170px', height: { xs: '29px', sm: '29px', md: '36px', xl: '46px' }, alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: { xs: '13px', sm: '13px', md: '15px' }, color: 'black', fontFamily: 'Axiforma', lineHeight: '120%' }}>Backpack Details</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '7px', sm: '16px' } }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: { sm: '14px', md: '23px', xl: '38px' }, fontFamily: 'Axiforma' }}>Jacquess Money Bands</Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: { sm: '7px', md: '10px', xl: '15px' }, fontFamily: 'Axiforma', maxWidth: '570px', maxHeight: { xs: '90px', sm: '86px' } }}>Introducing our trendy orange tote bag featuring a bold dollar symbol - the perfect accessory for anyone who wants to make </Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: { sm: '19px', md: '25px', xl: '32px' }, fontFamily: 'Axiforma' }}>Rp. 1.200K</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#25D366', borderRadius: '16px', maxWidth: '570px', height: { xs: '42px', sm: '42px', md: '100%', xl: '78px' } }}>
                                <Box sx={{ display: 'flex', gap: { sm: '10px', md: '19px' }, alignItems: 'center' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: { sm: '8px', md: '14px', xl: '24px' }, fontFamily: 'Axiforma', lineHeight: '24px', color: 'white' }}>Contact Via Whatsapp</Typography>
                                    <Box sx={{ maxWidth: { sm: '13px', md: '21px', xl: '31px' }, cursor: 'pointer', maxHeight: { sm: '13px', md: '21px', xl: '31px' } }} component={'img'} src={whatsapp} />
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