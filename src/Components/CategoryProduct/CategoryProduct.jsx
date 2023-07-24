import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../Redux/slices/UserReducer';
import { Link } from 'react-router-dom';
import axios from 'axios';


function CategoryProduct() {
    const dispatch = useDispatch();
    const [product, setProduct] = React.useState([]);
    const [searchData, setSearchData] = React.useState('');

    const dataCategories = useSelector(state => state.user.getDataCategories)

    const getProduct = async () => {
        const cek = /\d/.test(searchData)
        if (cek) {
            try {
                const dataProduct = await axios.get(
                    `https://anthagallerybe-server.up.railway.app/api/v1/product/read?product_price=${searchData}`
                )
                const payloadData = await dataProduct.data.data.get_all_product;
                setProduct(payloadData)
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const dataProduct = await axios.get(
                    `https://anthagallerybe-server.up.railway.app/api/v1/product/read?product_name=${searchData}`
                )
                const payloadData = await dataProduct.data.data.get_all_product;
                setProduct(payloadData)
            } catch (err) {
                console.log(err);
            }
        }
    }

    React.useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const [showAll, setShowAll] = React.useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const handleBackShow = () => {
        setShowAll(false);
    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', ml: { xs: '38px', sm: '135px' }, mr: { xs: '38px', sm: '135px' }, mt: { xs: '25px', md: '60px', xl: '60px', sm: '50px' }, width: '100%',
                    maxWidth: '1440px',
                }}>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1440px', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: '15px', sm: '17px', md: '33px', xl: '38px' }, fontFamily: 'Axiforma' }}>Explore Category</Typography>
                                <TextField onChange={(e) => setSearchData(e.target.value)} id="outlined-basic" label="Search" variant="outlined" sx={{ maxWidth: '115px' }} />
                                <Button onClick={getProduct} variant='contained' sx={{
                                    width: '199px', backgroundColor: '#317276', fontFamily: 'Axiforma', ":hover": {
                                        bgcolor: "#317276"
                                    }
                                }}>Cari</Button>
                            </Box>
                            {!showAll ?
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', sm: '12px', md: '12px', xl: '16px' }, fontFamily: 'Axiforma', cursor: 'pointer' }} onClick={handleShowAll}>See All</Typography>
                                :
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', md: '12px', xl: '16px' }, fontFamily: 'Axiforma', cursor: 'pointer' }} onClick={handleBackShow}>Back</Typography>
                            }
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: { xs: '13px', sm: '20px' }, mt: { xs: '30px', sm: '40px', md: '45px' }, flexWrap: 'wrap', width: '100%', maxWidth: '1440px' }}>
                        {product !== null && Object.keys(product).length !== 0 ? product.map((data, index) => {
                            const currencyCost = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.product_price);
                            return (
                                <Link to={`/detail-product/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
                                        <Card sx={{ maxWidth: { xs: '128px', sm: '148px', md: '230px', xl: 270 }, backgroundColor: '#E1E6E1', borderRadius: '16px', height: { xs: '145px', sm: '169px', md: '215px', xl: 260 }, }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                                <Box sx={{ maxWidth: { xs: '85px', sm: '103px', md: '140px', xl: '167px' }, width: '100%', height: { xs: '113px', sm: '134px', md: '184px', xl: '234px' }, pt: '15px' }} component={'img'} src={data.image[0]} />
                                            </Box>
                                        </Card>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '5px', md: '12px' }, maxWidth: { md: '270px', xs: '128px', sm: '148px', } }}>
                                            <Typography sx={{ fontWeight: 600, fontSize: { xs: '12px', sm: '14px', md: '19px', xl: '24px' }, fontFamily: 'Axiforma', color: 'black', pt: { xs: '8px', sm: '20px' } }}>{data.product_name} </Typography>
                                            <Typography sx={{ fontWeight: 500, fontSize: { xs: '8px', sm: '12px', md: '17px', xl: '22px' }, fontFamily: 'Axiforma', color: 'black' }}>{currencyCost} </Typography>
                                        </Box>
                                    </Box>
                                </Link>
                            )
                        }) : ''}
                    </Box>
                    <Box sx={{ display: 'flex', gap: { xs: '13px', sm: '20px' }, mt: { xs: '30px', sm: '40px', md: '45px' }, flexWrap: 'wrap', width: '100%', maxWidth: '1440px' }}>
                        {showAll ?
                            dataCategories !== null && Object.keys(dataCategories).length !== 0 ? dataCategories.map((data, index) => {
                                return (
                                    <Link to={`/category/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <Card key={index} sx={{
                                            maxWidth: { xs: '77px', sm: '140px', md: '230px', xl: 270 }, maxHeight: { xs: '77px', sm: '140px', md: '230px', xl: 300 }, width: '100%', py: '10px', px: '10px',
                                            minWidth: { xs: '77px', sm: '140px', md: '230px', xl: 270 }, minHeight: { xs: '77px', sm: '140px', md: '230px', xl: 300 }, background: 'rgba(16, 16, 16, 0.1)', borderRadius: '16px', height: '100%', ":hover": {
                                                transform: 'scale(1.1)'
                                            }, transition: 'transform 0.5s'
                                        }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>
                                                <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%' }}>
                                                    <Box sx={{ width: '100%', objectFit: 'contain', maxHeight: '60%' }} component={'img'} src={data.image} />
                                                    <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', md: '27px', xl: '32px', sm: '15px' }, fontFamily: 'Axiforma', color: 'black', textAlign: 'center' }}>{data.category_name}</Typography>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Link>
                                )
                            }) : ''
                            : dataCategories !== null && Object.keys(dataCategories).length !== 0 ? dataCategories.slice(0, 8).map((data, index) => {
                                return (
                                    <Link to={`/category/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <Card key={index} sx={{
                                            maxWidth: { xs: '77px', sm: '140px', md: '230px', xl: 270 }, maxHeight: { xs: '77px', sm: '140px', md: '230px', xl: 300 }, width: '100%', py: '10px', px: '10px',
                                            minWidth: { xs: '77px', sm: '140px', md: '230px', xl: 270 }, minHeight: { xs: '77px', sm: '140px', md: '230px', xl: 300 }, background: 'rgba(16, 16, 16, 0.1)', borderRadius: '16px', height: '100%', ":hover": {
                                                transform: 'scale(1.1)'
                                            }, transition: 'transform 0.5s'
                                        }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>
                                                <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%' }}>
                                                    <Box sx={{ width: '100%', objectFit: 'contain', maxHeight: '60%' }} component={'img'} src={data.image} />
                                                    <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', md: '27px', xl: '32px', sm: '15px' }, fontFamily: 'Axiforma', color: 'black', textAlign: 'center' }}>{data.category_name}</Typography>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Link>
                                )
                            }) : ''}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CategoryProduct