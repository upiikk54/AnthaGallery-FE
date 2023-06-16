import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../Redux/slices/AdminReducer'
import { useNavigate, useParams } from 'react-router-dom';
import Dashboard from '../Dashboard';
import { useDropzone } from "react-dropzone";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { getAllCategories } from '../../../Redux/slices/UserReducer';

function UpdateProductAdmin() {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    const handleCancelProduct = () => {
        navigate('/admin/product')
    }

    const [age, setAge] = React.useState('');
    const dispatch = useDispatch()
    const { id } = useParams();

    const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
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
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    const dataProduct = useSelector(state => state.admin.getDataProductSingle);
    const dataCategories = useSelector(state => state.user.getDataCategories)
    React.useEffect(() => {
        dispatch(getAllCategories())
    }, [])
    const [categoryId, setCategoryId] = React.useState()
    const [productValue, setProductValue] = React.useState({
        productNameValue: '',
        productPriceValue: '',
        productDescription: '',
    })
    React.useEffect(() => {
        dispatch(getProductById(id)).then((res) => {
            if (res.payload.status === true) {
                setProductValue({
                    ...productValue,
                    productNameValue: res.payload.data.get_product_By_Id.product_name,
                    productPriceValue: res.payload.data.get_product_By_Id.product_price,
                    productDescription: res.payload.data.get_product_By_Id.product_description,
                })
            }
        })
    }, [id])

    const handleChange = (prop) => (event) => {
        setProductValue({ ...productValue, [prop]: event.target.value });
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const postPayload = new FormData();
            postPayload.append("category_id", categoryId);
            postPayload.append("product_name", productValue.productNameValue);
            postPayload.append("product_price", productValue.productPriceValue);
            postPayload.append("product_description", productValue.productDescription);
            files.forEach(element => {
                postPayload.append("image", element);
            });

            const createRequest = await axios.put(
                `https://anthagallery.site/api/v1/product/update/${id}`,
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
                enqueueSnackbar(`${createResponse.message}`, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
                navigate(`/admin/dashboard`);
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
                                onChange={handleChange('productNameValue')}
                                value={productValue.productNameValue}
                                fullWidth
                                placeholder="Nama Produk"
                                id="fullWidth"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Harga</Typography>
                            <TextField
                                id="outlined-number"
                                onChange={handleChange('productPriceValue')}
                                type="number"
                                value={productValue.productPriceValue}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Deskripsi</Typography>
                            <TextField
                                onChange={handleChange('productDescription')}
                                value={productValue.productDescription}
                                id="outlined-multiline-static"
                                placeholder="Deskripsi"
                                multiline
                                rows={4}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Gambar Produk</Typography>
                            <section className="container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    {files.length === 0 ? <button className="mb-3 box2-update-product">
                                        <Box className="profil-account1 d-flex">
                                            {dataProduct.image ? dataProduct.image.map((img) => (
                                                <Box sx={{ width: '250px' }} component={'img'}
                                                    className="profil-camera-form1"
                                                    src={`${img}`}
                                                />
                                            ))
                                                : <h2>
                                                    <AddCircleOutlinedIcon
                                                        className="plus"
                                                    />
                                                </h2>}
                                        </Box>
                                    </button> :
                                        <div>
                                            {thumbs}
                                        </div>}
                                    {rejected[0] && enqueueSnackbar('Gambar Maksimal 5', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 })}
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
                            <Button onClick={handleUpdateProduct} variant='contained' sx={{
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