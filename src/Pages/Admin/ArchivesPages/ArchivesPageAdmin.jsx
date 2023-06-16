import React from 'react'
import Dashboard from '../Dashboard'
import { Box, Button, IconButton, Modal, Tooltip, Typography } from '@mui/material'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';
import empty from '../../../Assets/GIF/empty-box.gif';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { deleteProductById } from '../../../Redux/slices/AdminReducer';


function ArchivesPageAdmin() {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const [idProduct, setIdProduct] = React.useState()
    const [openModalArchives, setOpenModalArchives] = React.useState(false);
    const handleCloseModalArchives = () => setOpenModalArchives(false);
    const handleOpenModalArchives = (id) => {
        setOpenModalArchives(true);
        setIdProduct(id)
    }
    const [openModalDelete, setOpenModalDelete] = React.useState(false);
    const handleCloseModalDelete = () => setOpenModalDelete(false);
    const handleOpenModalDelete = (id) => {
        setOpenModalDelete(true);
        setIdProduct(id)
    }
    const [product, setProduct] = React.useState([]);
    const getProductArchives = async () => {
        try {
            const dataProduct = await axios.get(
                `https://anthagallery.site/api/v1/product/read?archives=true`
            )

            const payloadData = await dataProduct.data.data.get_all_product;
            setProduct(payloadData)
        } catch (err) {
            const response = err.response.data;
            enqueueSnackbar(`${response.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
        }
    }
    React.useEffect(() => {
        getProductArchives()
    }, [])

    const handleUpdateArchives = async (idProduct, archives) => {
        try {
            const token = localStorage.getItem("token");
            const postPayload = new FormData();
            postPayload.append("archives", archives);

            const createRequest = await axios.put(
                `https://anthagallery.site/api/v1/product/update/${idProduct}`,
                postPayload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            const createResponse = createRequest.data;

            if (createResponse.status) {
                enqueueSnackbar(`Produk berhasil dikeluarkan dari arsip.`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
                handleCloseModalArchives()
                getProductArchives()
            }
        } catch (err) {
            const response = err.response.data;
            enqueueSnackbar(`${response.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
        }
    };

    const handleDeleteProductCategoryById = (id) => {
        dispatch(deleteProductById(id)).then((res) => {
            if (res.payload.status === true || res.payload.statusCode === 201) {
                enqueueSnackbar(`${res.payload.message}`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 1500 });
                handleCloseModalDelete()
                getProductArchives()
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
                    open={openModalArchives}
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
                                Apakah anda yakin ingin mengembalikan produk dari arsip ?
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: '20px' }}>
                                <Button onClick={handleCloseModalArchives} variant='outlined'>Batalkan</Button>
                                <Button onClick={() => handleUpdateArchives(idProduct, false)} variant='outlined' color='error'>Yakin</Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
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
                                Apakah anda yakin ingin mengembalikan produk dari arsip ?
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: '20px' }}>
                                <Button onClick={handleCloseModalDelete} variant='outlined'>Batalkan</Button>
                                <Button onClick={() => handleDeleteProductCategoryById(idProduct)} variant='outlined' color='error'>Delete</Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
                {product.length !== 0 ? 
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mt: '20px', width: '100%', maxWidth: '1440px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>Arsip Produk</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', }}>
                        {product !== null && Object.keys(product).length !== 0 ? product.map((data, index) => {
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
                                            <IconButton onClick={() => handleOpenModalArchives(data._id)} sx={{ color: 'black' }}>
                                                <EditOutlinedIcon />
                                            </IconButton>
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
                :
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '70vh' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box component={'img'} src={empty} sx={{ width: '272px', height: '272px' }} />
                                    <Typography sx={{ color: '#6D7280', fontSize: '18px' }}>Kamu tidak memiliki produk yang diarsip</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                }

            </Dashboard>
        </>
    )
}

export default ArchivesPageAdmin