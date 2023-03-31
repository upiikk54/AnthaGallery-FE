import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Dashboard from '../Dashboard';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../../Redux/slices/AdminReducer';

function ProductAdmin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAddProduct = () => {
        navigate('/admin/product/add-product')
    }

    const dataProducts = useSelector(state => state.admin.getDataProducts)
    React.useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    console.log(dataProducts);
    return (
        <>
            <Dashboard>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mt: '20px', width: '100%', maxWidth: '1440px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>Produk</Typography>
                        <Button onClick={handleAddProduct} variant='contained' sx={{
                            width: '199px', height: '40px', backgroundColor: 'black', fontFamily: 'Axiforma', ":hover": {
                                bgcolor: "black"
                            }
                        }}>Tambah Produk</Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', }}>
                        {dataProducts !== null && Object.keys(dataProducts).length !== 0 ? dataProducts.map((data, index) => {
                            return (
                                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(16, 16, 16, 0.5)', p: '20px 36px', alignItems: 'center', height: '82px' }}>
                                    <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                        <Box sx={{ width: '42px', height: '42px', border: '1px solid #101010', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Inventory2OutlinedIcon />
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>{data.product_name}</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='admin-toggle' sx={{ display: 'flex', gap: '8px' }}>
                                        <Tooltip title="Edit">
                                            <Link to={`/admin/product/update-product/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
                                                <IconButton sx={{ color: 'black' }}>
                                                    <EditOutlinedIcon />
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton sx={{ color: 'black' }}>
                                                <DeleteOutlineOutlinedIcon sx={{ color: 'red' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </Box>
                            )
                        }) : ''}
                    </Box>
                </Box>
            </Dashboard>
        </>
    )
}

export default ProductAdmin