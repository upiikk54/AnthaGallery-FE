import { Box, Typography } from '@mui/material'
import React from 'react'
// import banner from '../../Assets/Banner/Banner.png'
import banner from '../../Assets/Banner/Banner_Category.png'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryById } from '../../Redux/slices/UserReducer'
import { useParams } from 'react-router-dom'

function Banner() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const dataCategory = useSelector(state => state.user.getDataCategoriesSingle)
    React.useEffect(() => {
        dispatch(getCategoryById(id))
    }, [])
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{ height: '256px', maxWidth: '1440px', width: '100%', backgroundImage: `url(${banner})` }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: { xs: '44px', sm: '41px', md: '54px', xl: '64px' }, color: 'white', pt: '90px' }}>{dataCategory.category_name}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Banner