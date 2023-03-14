import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Box } from '@mui/material';
import foto1 from '../../Assets/Carousel/Carousel1.png'

function Carousel() {
    return (
        <>
            {/* <MainContainer> */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={true}
                    navigation={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    style={{ maxWidth:'1440px' }}
                    loop={true}
                >
                    <SwiperSlide style={{ width: '100%', maxHeight: '686px' }}>
                        <Box component={'img'} src={foto1} sx={{ width: '100%', height: '686px',  objectFit: 'cover', objectPosition: 'top'}} />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '100%', maxHeight: '686px' }}>
                        <Box component={'img'} src={foto1} sx={{ width: '100%', height: '686px', objectFit: 'cover', objectPosition: 'top' }} />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: '100%', maxHeight: '686px' }}>
                        <Box component={'img'} src={foto1} sx={{ width: '100%', height: '686px', objectFit: 'cover', objectPosition: 'top' }} />
                    </SwiperSlide>
                </Swiper>
            {/* </MainContainer> */}
        </>
    )
}

export default Carousel