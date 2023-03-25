import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard'

function UpdateCategoryAdmin() {
    const navigate = useNavigate()
    const handleCancelCategory = () => {
        navigate('/admin/dashboard')
    }
    return (
        <>
            <Dashboard>
                <Box sx={{ display: 'flex', width: '100%', maxWidth: '1440px', border: '1px solid #101010', borderRadius: '8px', height: '262px', mt: '30px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '45px', width: '100%', maxWidth: '1440px', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', pt: '35px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Kategori</Typography>
                            <TextField fullWidth label="Kategori" id="fullWidth" />
                        </Box>
                        <Box sx={{ display: 'flex', gap: '36px' }}>
                            <Button variant='outlined' onClick={handleCancelCategory} sx={{
                                border: '1px solid #6D7280', color: 'black'
                            }}>Batalkan</Button>
                            <Button variant='contained' sx={{
                                height: '56px', backgroundColor: 'black', fontFamily: 'Axiforma', ":hover": {
                                    bgcolor: "black"
                                }, fontSize: '16px'
                            }}>Simpan Perubahan</Button>
                        </Box>
                    </Box>
                </Box>
            </Dashboard>
        </>
    )
}

export default UpdateCategoryAdmin