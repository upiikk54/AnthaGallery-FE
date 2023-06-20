import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay } from "swiper";
import whatsapp from '../../Assets/DetailProduct/Whatsapp.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../Redux/slices/UserReducer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

function DetailProduct() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const lg = useMediaQuery(theme.breakpoints.up('lg'));

    const dispatch = useDispatch()
    const { id } = useParams();
    const dataProduct = useSelector(state => state.user.getDataProductSingle)

    React.useEffect(() => {
        dispatch(getProductById(id))
    }, [])
    const handleBackProduct = () => {
        navigate(-1)
    }
    
    const handleCreateHistoryChat = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const chatUsersPayload = {
                product_id: dataProduct._id,
                chat_users: `Hallo kak apakah produk ${dataProduct.product_name} ready ?`,
            }

            const postPayload = await axios.post(
                "https://anthagallery-server.up.railway.app/api/v1/chatHistory/create",
                chatUsersPayload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const CreateResponse = postPayload.data;

            if (CreateResponse.status) {
                enqueueSnackbar(`${CreateResponse.message}`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
                window.location.href = `https://wa.me/+6281259526461?text=Hallo%20kak%20apakah%20produk%20${dataProduct.product_name}%20ready%20`
            }
        } catch (err) {
            const response = err.response.data;
            enqueueSnackbar(`${response.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
        }
    };

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
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1440px', flexWrap: 'wrap', justifyContent: {xs: 'center', sm: 'unset'} }}>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={handleBackProduct} sx={{ textDecoration: "none", color: "black" }}>
                            <Typography sx={{ fontWeight: 400, fontSize: { xs: '14px', sm: '14px', md: '16px' }, fontFamily: 'Axiforma',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: {xs: '100vw' , sm: '148px', md: '267px', lg: '362px' }  }}>{dataProduct.product_name}</Typography>
                        </Link>
                        <Typography sx={{ fontWeight: 400, fontSize: { xs: '14px', sm: '14px', md: '16px' }, fontFamily: 'Axiforma', color: '#698269' }}> / Detail Product</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', flexWrap: { xs: 'wrap', sm: 'unset' } }}>
                        <Box className='swiper-container-detailProduct'>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                pagination={true}
                                navigation={true}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                style={{ maxWidth: lg ? '570px' : md ? '450px' : sm ? '320px' : '100vw', borderRadius: '16px' }}
                                loop={true}
                            >
                                {dataProduct.image ? dataProduct.image.map((data, index) => {
                                    return (
                                        <SwiperSlide key={index} style={{ width: '100%', maxHeight: { sm: '210px', md: '362px', xl: '433px' } }}>
                                            <Box component={'img'} src={data} sx={{ width: '100%', height: { sm: '210px', md: '362px', xl: '433px' }, objectFit: 'contain', objectPosition: 'top' }} />
                                        </SwiperSlide>
                                    )
                                }) : ''}
                            </Swiper>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '32px', sm: '40px', md: '127px', xl: '122px' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '8px', sm: '10px', md: '28px' } }}>
                                <Box sx={{ display: 'flex', backgroundColor: '#E1E6E1', width: '170px', height: { xs: '29px', sm: '29px', md: '36px', xl: '46px' }, alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: { xs: '13px', sm: '13px', md: '15px' }, color: 'black', fontFamily: 'Axiforma', lineHeight: '120%' }}>Backpack Details</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '7px', sm: '16px' } }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: { sm: '14px', md: '23px', xl: '38px' }, fontFamily: 'Axiforma' }}>{dataProduct.product_name}</Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: { sm: '7px', md: '10px', xl: '15px' }, fontFamily: 'Axiforma', maxWidth: '570px'}}>{dataProduct.product_description}</Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: { sm: '19px', md: '25px', xl: '32px' }, fontFamily: 'Axiforma' }}>Rp. {dataProduct.product_price}</Typography>
                                </Box>
                            </Box>
                            <Button onClick={handleCreateHistoryChat} variant="contained" sx={{
                                display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#25D366', borderRadius: '16px', maxWidth: '570px', height: { xs: '50px', sm: '42px', md: '55px', xl: '78px' }, ":hover": {
                                    bgcolor: "#25D366"
                                }
                            }}>
                                <Typography sx={{ fontWeight: 600, fontSize: { sm: '8px', md: '14px', xl: '24px' }, fontFamily: 'Axiforma', lineHeight: '24px', color: 'white' }}>Contact Via Whatsapp</Typography>
                                <Box sx={{ maxWidth: { sm: '13px', md: '21px', xl: '31px' }, maxHeight: { sm: '13px', md: '21px', xl: '31px' } }} component={'img'} src={whatsapp} />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailProduct