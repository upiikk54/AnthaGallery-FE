import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { NumericFormat } from "react-number-format";
import { useDropzone } from 'react-dropzone';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../Redux/slices/UserReducer';


function AddProductAdmin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const handleCancelProduct = () => {
        navigate('/admin/product')
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const dataCategories = useSelector(state => state.user.getDataCategories)
    React.useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: '500px',
        height: '250px',
        padding: 4,
        boxSizing: 'border-box'
    };

    const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
    };

    const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
    };

    const [files, setFiles] = React.useState([]);
    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        accept: {
            'image/*': []
        },
        maxFiles: 5,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const rejected = fileRejections.map(() => {
        return <div></div>
    });
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    alt=''
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    React.useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);



    const productNameValue = React.useRef("");
    const productPriceValue = React.useRef();
    const productDescriptionValue = React.useRef("");
    const [categoryId, setCategoryId] = React.useState()


    const handleCreateProduct = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const postPayload = new FormData();
            postPayload.append("category_id", categoryId);
            postPayload.append("product_name", productNameValue.current.value);
            postPayload.append("product_price", productPriceValue.current.value);
            postPayload.append("product_description", productDescriptionValue.current.value);
            files.forEach(element => {
                postPayload.append("image", element);
            });
            const createRequest = await axios.post(
                "http://localhost:8987/api/v1/product/create",
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
                navigate('/admin/dashboard')
                enqueueSnackbar(`${createResponse.message}`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
            }

        } catch (err) {
            const response = err.response.data;
            enqueueSnackbar(`${response.message}`, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
        }
    };

    return (
        <>
            <Dashboard>
                <Box sx={{ display: 'flex', width: '100%', maxWidth: '1440px', border: '1px solid #101010', borderRadius: '8px', height: '100%', mt: '30px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '1440px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', pt: '35px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Nama Produk</Typography>
                            <TextField
                                inputRef={productNameValue}
                                fullWidth
                                id="fullWidth" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Harga</Typography>
                            <TextField
                                id="outlined-number"
                                type="number"
                                inputRef={productPriceValue}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Deskripsi</Typography>
                            <TextField
                                inputRef={productDescriptionValue}
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Gambar</Typography>
                            <section className="container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    {files.length === 0 ? <button className="mb-3 box2" style={{ width: '100%' }} >
                                        <h2>
                                            <AddCircleOutlinedIcon
                                                className="plus"
                                            />
                                        </h2>
                                    </button> :
                                        <div>
                                            {thumbs}
                                        </div>}
                                    {rejected[0] && enqueueSnackbar('Gambar Maksimal 1', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 })}
                                </div>
                            </section>
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
                                    {Object.keys(dataCategories).length !== 0 ? dataCategories.map((item, index) => {
                                        return (
                                            <MenuItem 
                                            key={index}
                                            onClick={() => setCategoryId(item._id)}
                                            value={item._id}
                                            >{item.category_name}</MenuItem>
                                        )
                                    }) : ''}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '36px', width: '100%', maxWidth: '1440px', justifyContent: 'center' }}>
                            <Button variant='outlined' onClick={handleCancelProduct} sx={{
                                border: '1px solid #6D7280', color: 'black'
                            }}>Batalkan</Button>
                            <Button onClick={handleCreateProduct} variant='contained' sx={{
                                height: '56px', backgroundColor: 'black', fontFamily: 'Axiforma', ":hover": {
                                    bgcolor: "black"
                                }, fontSize: '16px'
                            }}>Tambahkan Produk</Button>
                        </Box>
                    </Box>
                </Box>
            </Dashboard>
        </>
    )
}

export default AddProductAdmin