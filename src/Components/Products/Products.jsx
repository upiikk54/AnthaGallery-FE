import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryById, getProductByCategoryId } from '../../Redux/slices/UserReducer';

function Products() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const dataProduct = useSelector(state => state.user.getDataProductByCategorySingle)
    const dataCategory = useSelector(state => state.user.getDataCategoriesSingle)
    React.useEffect(() => {
        dispatch(getCategoryById(id))
        dispatch(getProductByCategoryId(id))
    }, [])

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
                            <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
                                <Typography sx={{ fontWeight: 400, fontSize: { xs: '12px', sm: '16px' }, fontFamily: 'Axiforma' }}>Home / </Typography>
                            </Link>
                            <Typography sx={{ fontWeight: 400, fontSize: { xs: '12px', sm: '16px' }, fontFamily: 'Axiforma', color: '#698269' }}>{dataCategory.category_name}</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontWeight: '600', fontSize: { xs: '16px', sm: '24px' }, fontFamily: 'Axiforma', mt: '36px' }}>{dataCategory.category_name} Collection</Typography>
                    <Box sx={{ display: 'flex', gap: { xs: '15px', sm: '25px', md: '30px' }, mt: '20px', flexWrap: 'wrap', width: '100%', maxWidth: '1440px', }}>
                        {dataProduct !== null && Object.keys(dataProduct).length !== 0 ? dataProduct.map((data, index) => {
                            const currencyCost = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.product_price);
                            return (
                                <Link to={`/detail-product/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
                                    {data.archives === false ?
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
                                        : ''}
                                </Link>
                            )
                        }) : ''}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Products