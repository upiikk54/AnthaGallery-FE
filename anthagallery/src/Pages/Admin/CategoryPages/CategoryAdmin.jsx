import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Dashboard from '../Dashboard';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Link, useNavigate } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function CategoryAdmin() {
    const navigate = useNavigate()
    const handleAddCategory = () => {
        navigate('/admin/dashboard/add-category')
    }

    return (
        <>
            <Dashboard>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mt: '20px', width: '100%', maxWidth: '1440px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>Kategori</Typography>
                        <Button onClick={handleAddCategory} variant='contained' sx={{ width: '199px', height: '40px', backgroundColor: 'black', fontFamily: 'Axiforma', ":hover": {
                            bgcolor: "black"
                        } }}>Tambah Kategori</Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px',  }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(16, 16, 16, 0.5)', p: '20px 36px', alignItems: 'center', height: '82px' }}>
                            <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <Box sx={{ width: '42px', height: '42px', border: '1px solid #101010', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <CategoryOutlinedIcon />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>Kategori 1</Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: '16px', fontFamily: 'Axiforma', color: 'grey' }}>19 march, 2023</Typography>
                                </Box>
                            </Box>
                            <Box className='admin-toggle' sx={{ display: 'flex', gap: '8px' }}>
                                <Tooltip title="Edit">
                                    <Link to={`/admin/dashboard/update-category`} style={{ textDecoration: "none", color: "black" }}>
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(16, 16, 16, 0.5)', p: '20px 36px', alignItems: 'center', height: '82px' }}>
                            <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <Box sx={{ width: '42px', height: '42px', border: '1px solid #101010', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <CategoryOutlinedIcon />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>Kategori 1</Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: '16px', fontFamily: 'Axiforma', color: 'grey' }}>19 march, 2023</Typography>
                                </Box>
                            </Box>
                            <Box className='admin-toggle' sx={{ display: 'flex', gap: '8px' }}>
                                <Tooltip title="Edit">
                                    <Link to={`/admin/dashboard/update-category`} style={{ textDecoration: "none", color: "black" }}>
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
                    </Box>
                </Box>
            </Dashboard>
        </>
    )
}

export default CategoryAdmin