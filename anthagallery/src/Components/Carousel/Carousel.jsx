import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Box } from '@mui/material';
import foto1 from '../../Assets/Carousel/Banner1.png';

function Carousel() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={true}
                navigation={true}
                slidesPerView={1}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                style={{ maxWidth: '1440px' }}
            // loop={true}
            >
                <SwiperSlide style={{ width: '100%', maxHeight: { xl: '450px', md: '425px', sm: '445px', xs: '210px' } }}>
                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: { xl: '450px', md: '425px', sm: '445px', xs: '210px' }, objectFit: 'cover', objectPosition: 'contain' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', maxHeight: { xl: '450px', md: '425px', sm: '445px', xs: '210px' } }}>
                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: { xl: '450px', md: '425px', sm: '445px', xs: '210px' }, objectFit: 'cover', objectPosition: 'contain' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', maxHeight: { xl: '450px', md: '425px', sm: '445px', xs: '210px' } }}>
                    <Box component={'img'} src={foto1} sx={{ width: '100%', height: { xl: '450px', md: '425px', sm: '445px', xs: '210px' }, objectFit: 'cover', objectPosition: 'contain' }} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel