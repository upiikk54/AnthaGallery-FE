import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../Redux/slices/AdminReducer'
import { useNavigate, useParams } from 'react-router-dom';
import Dashboard from '../Dashboard';

function UpdateProductAdmin() {
    const navigate = useNavigate()
    const handleCancelProduct = () => {
        navigate('/admin/product')
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const dispatch = useDispatch()
    const { id } = useParams();
    const dataProduct = useSelector(state => state.admin.getDataProductSingle);
    React.useEffect(() => {
        dispatch(getProductById(id))
    }, [])
    console.log(dataProduct);
    return (
        <>
            <Dashboard>
                <Box sx={{ display: 'flex', width: '100%', maxWidth: '1440px', border: '1px solid #101010', borderRadius: '8px', height: '100%', mt: '30px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '1440px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', pt: '35px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Nama Produk</Typography>
                            <TextField
                                value={dataProduct.product_name}
                                fullWidth
                                placeholder="Nama Produk"
                                id="fullWidth"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Harga</Typography>
                            <NumericFormat
                                value={dataProduct.product_price}
                                allowLeadingZeros
                                placeholder="harga produk"
                                thousandSeparator=","
                                customInput={TextField}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Deskripsi</Typography>
                            <TextField
                                value={dataProduct.product_description}
                                id="outlined-multiline-static"
                                placeholder="Deskripsi"
                                multiline
                                rows={4}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Gambar</Typography>
                            <TextField fullWidth label="Kategori" id="fullWidth" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Kategori</Typography>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '36px', width: '100%', maxWidth: '1440px', justifyContent: 'center' }}>
                            <Button variant='outlined' onClick={handleCancelProduct} sx={{
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

export default UpdateProductAdmin