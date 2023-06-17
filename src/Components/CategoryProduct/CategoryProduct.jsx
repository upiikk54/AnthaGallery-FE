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
                            <Typography sx={{ fontWeight: 600, fontSize: { xs: '15px', sm: '17px', md: '33px', xl: '38px' }, fontFamily: 'Axiforma' }}>Explore Category</Typography>
                            {!showAll ?
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', sm: '12px', md: '12px', xl: '16px' }, fontFamily: 'Axiforma', cursor: 'pointer' }} onClick={handleShowAll}>See All</Typography>
                                :
                                <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', md: '12px', xl: '16px' }, fontFamily: 'Axiforma', cursor: 'pointer' }} onClick={handleBackShow}>Back</Typography>
                            }
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: { xs: '13px', sm: '20px' }, mt: { xs: '30px', sm: '40px', md: '45px' }, flexWrap: 'wrap', width: '100%', maxWidth: '1440px' }}>
                        {showAll ?
                            dataCategories !== null && Object.keys(dataCategories).length !== 0 ? dataCategories.map((data, index) => {
                                return (
                                    <Link to={`/category/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <Box sx={{ position: 'relative' }} key={index}>
                                            <Card sx={{ minWidth: { xs: '77px', sm: '140px', md: '230px', xl: 270 }, background: 'rgba(16, 16, 16, 0.1)', borderRadius: '16px', height: { xs: '99px', sm: '158px', md: '280px', xl: 338 }, }}>
                                                <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', pb: '10px' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box sx={{ maxWidth: { xs: '50px', sm: '79px', md: '125px', xl: '164px' }, width: '100%', }} component={'img'} src={data.image} />
                                                    </Box>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                                        <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', md: '27px', xl: '32px', sm: '15px' }, fontFamily: 'Axiforma', color: 'black' }}>{data.category_name}</Typography>
                                                    </Box>
                                                </Box>
                                            </Card>
                                        </Box>
                                    </Link>
                                )
                            }) : ''
                            : dataCategories !== null && Object.keys(dataCategories).length !== 0 ? dataCategories.slice(0, 8).map((data, index) => {
                                return (
                                    <Link to={`/category/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <Box sx={{ position: 'relative' }} key={index}>
                                            <Card sx={{
                                                minWidth: { xs: '77px', sm: '140px', md: '230px', xl: 270 }, background: 'rgba(16, 16, 16, 0.1)', borderRadius: '16px', height: '100%', ":hover": {
                                                    transform: 'scale(1.1)'
                                                }, transition: 'transform 0.5s'
                                            }}>
                                                <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', pb: '10px' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Box sx={{ maxWidth: { xs: '50px', sm: '79px', md: '125px', xl: '164px' }, width: '100%', }} component={'img'} src={data.image} />
                                                    </Box>
                                                    <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                                                        <Typography sx={{ fontWeight: 600, fontSize: { xs: '10px', md: '27px', xl: '32px', sm: '15px' }, fontFamily: 'Axiforma', color: 'black' }}>{data.category_name}</Typography>
                                                    </Box>
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