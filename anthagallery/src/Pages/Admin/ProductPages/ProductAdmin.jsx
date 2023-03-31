import { Box, Button, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Dashboard from '../Dashboard';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProductById, getAllProducts } from '../../../Redux/slices/AdminReducer';
import { useSnackbar } from 'notistack';

function ProductAdmin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    const [openModalDelete, setOpenModalDelete] = React.useState(false);
    const handleCloseModalDelete = () => setOpenModalDelete(false);
    const [idCategory, setIdCategory] = React.useState()
    const handleOpenModalDelete = (id) => {
        setOpenModalDelete(true);
        setIdCategory(id)
    }

    const handleAddProduct = () => {
        navigate('/admin/product/add-product')
    }

    const dataProducts = useSelector(state => state.admin.getDataProducts)
    React.useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const handleDeleteProductCategoryById = (id) => {
        dispatch(deleteProductById(id)).then((res) => {
            if (res.payload.status === true || res.payload.statusCode === 201) {
                dispatch(getAllProducts())
                enqueueSnackbar(`${res.payload.message}`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 1500 });
                handleCloseModalDelete()
            }else if (res.payload.status === false || res.payload.statusCode === 401) {
                enqueueSnackbar(`${res.payload.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 1500 });
            } else {
                enqueueSnackbar(`Gagal menghapus produk`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 1500 });
            }
        })
    }
    
    return (
        <>
            <Dashboard>
                <Modal
                    open={openModalDelete}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        borderRadius: '25px',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                {/* <Box component={'img'} src={Warning} sx={{ width: '250px', height: '250px' }} /> */}
                            </Box>
                            <Typography sx={{ mt: 2, textAlign: 'center' }}>
                                Apakah anda yakin ingin menghapus kategori ini ?
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: '20px' }}>
                                <Button onClick={handleCloseModalDelete} variant='outlined'>Batalkan</Button>
                                <Button onClick={() => handleDeleteProductCategoryById(idCategory)} variant='outlined' color='error'>Delete</Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
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
                                            <IconButton onClick={() => handleOpenModalDelete(data._id)} sx={{ color: 'black' }}>
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