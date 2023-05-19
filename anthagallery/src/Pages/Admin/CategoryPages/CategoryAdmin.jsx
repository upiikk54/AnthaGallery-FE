import { Box, Button, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Dashboard from '../Dashboard';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Link, useNavigate } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../Redux/slices/UserReducer';
import { deleteCategoryById } from '../../../Redux/slices/AdminReducer';
import { useSnackbar } from 'notistack';
import empty from '../../../Assets/GIF/empty-box.gif';


function CategoryAdmin() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [openModalDelete, setOpenModalDelete] = React.useState(false);
    const [idCategory, setIdCategory] = React.useState()
    const handleOpenModalDelete = (id) => {
        setOpenModalDelete(true);
        setIdCategory(id)
    }
    const dispatch = useDispatch()
    const handleAddCategory = () => {
        navigate('/admin/dashboard/add-category')
    }
    const dataCategories = useSelector(state => state.user.getDataCategories)
    React.useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const handleCloseModalDelete = () => setOpenModalDelete(false);
    const handleDeleteCategoryById = (id) => {
        dispatch(deleteCategoryById(id)).then((res) => {
            if (res.payload.status === true || res.payload.statusCode === 201) {
                dispatch(getAllCategories())
                enqueueSnackbar(`${res.payload.message}`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 1500 });
                handleCloseModalDelete()
            } else if (res.payload.status === false || res.payload.statusCode === 401) {
                enqueueSnackbar(`${res.payload.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 1500 });
            } else {
                enqueueSnackbar(`Gagal menghapus kategori`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 1500 });
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
                                <Button onClick={() => handleDeleteCategoryById(idCategory)} variant='outlined' color='error'>Delete</Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
                {dataCategories.length !== 0 ?
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mt: '20px', width: '100%', maxWidth: '1440px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>Kategori</Typography>
                            <Button onClick={handleAddCategory} variant='contained' sx={{
                                width: '199px', height: '40px', backgroundColor: 'black', fontFamily: 'Axiforma', ":hover": {
                                    bgcolor: "black"
                                }
                            }}>Tambah Kategori</Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', }}>
                            {dataCategories !== null && Object.keys(dataCategories).length !== 0 ? dataCategories.map((data, index) => {
                                return (
                                    <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(16, 16, 16, 0.5)', p: '20px 36px', alignItems: 'center', height: '82px' }}>
                                        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                            <Box sx={{ width: '42px', height: '42px', border: '1px solid #101010', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <CategoryOutlinedIcon />
                                            </Box>
                                            <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>{data.category_name}</Typography>
                                        </Box>
                                        <Box className='admin-toggle' sx={{ display: 'flex', gap: '8px' }}>
                                            <Tooltip title="Edit">
                                                <Link to={`/admin/dashboard/update-category/${data._id}`} style={{ textDecoration: "none", color: "black" }}>
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
                    :
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '70vh' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box component={'img'} src={empty} sx={{ width: '272px', height: '272px' }} />
                                    <Typography sx={{ color: '#6D7280', fontSize: '18px' }}>Kamu belum memiliki kategori</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button onClick={handleAddCategory} variant='contained' sx={{
                                        width: '131px', height: '48px', backgroundColor: 'black', borderRadius: '9px', ":hover": {
                                            bgcolor: "black"
                                        }
                                    }}>Tambahkan</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                }
            </Dashboard>
        </>
    )
}

export default CategoryAdmin