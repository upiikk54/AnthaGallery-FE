import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../Redux/slices/UserReducer';
import { Link } from 'react-router-dom';


function CategoryProduct() {
    const dispatch = useDispatch()

    const dataCategories = useSelector(state => state.user.getDataCategories)
    React.useEffect(() => {
        dispatch(getAllCategories())
    }, [])
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', ml: { xs: '38px', sm: '135px' }, mr: { xs: '38px', sm: '135px' }, mt: { xs: '25px', md: '70px', xl: '84px', sm: '50px' }, width: '100%',
                    maxWidth: '1440px',
                }}>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1440px', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: { xs: '15px', md: '33px', xl: '38px' }, fontFamily: 'Axiforma' }}>Explore Category</Typography>
                            <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', md: '12px', xl: '16px' }, fontFamily: 'Axiforma' }}>See All</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: { xs: '13px', sm: '20px' }, mt: { xs: '30px', sm: '46px', md: '107px' }, flexWrap: 'wrap', width: '100%', maxWidth: '1440px', }}>
                        {dataCategories !== null && Object.keys(dataCategories).length !== 0 ? dataCategories.map((data, index) => {
                            return (
                                <Link to={`/category/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
                                    <Box sx={{ position: 'relative' }} key={index}>
                                        <Card sx={{ minWidth: { xs: '77px', sm: '140px', md: '230px', xl: 270 }, backgroundColor: '#698269', borderRadius: '16px', height: { xs: '99px', sm: '158px', md: '280px', xl: 338 }, }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Box sx={{ maxWidth: { xs: '50px', sm: '79px', md: '125px', xl: '164px' }, width: '100%', position: 'absolute', top: { xs: '-15px', sm: '-24px', md: '-37px', xl: '-49px' }, }} component={'img'} src={data.image} />
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', pt: { xs: '68px', sm: '126px', md: '220px', xl: '248px' } }}>
                                                <Typography sx={{ fontWeight: 600, fontSize: { xs: '12px', md: '27px', xl: '32px' }, fontFamily: 'Axiforma', color: 'white' }}>{data.category_name}</Typography>
                                            </Box>
                                        </Card>
                                    </Box>
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