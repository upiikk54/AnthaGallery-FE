import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getCategoryById } from '../../../Redux/slices/AdminReducer'
import Dashboard from '../Dashboard'
import { useDropzone } from "react-dropzone";
import axios from 'axios'
import { useSnackbar } from 'notistack'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function UpdateCategoryAdmin() {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();
    const navigate = useNavigate()
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

    const handleCancelCategory = () => {
        navigate('/admin/dashboard')
    }

    const [files, setFiles] = React.useState([]);
    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        accept: {
            'image/*': []
        },
        maxFiles: 1,
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

    const [categoryValue, setCategoryValue] = React.useState({
        categoryNameValue: '',
    })
    const dataCategory = useSelector(state => state.admin.getDataCategorySingle);
    React.useEffect(() => {
        dispatch(getCategoryById(id)).then((res) => {
            if (res.payload.status === true) {
                setCategoryValue({
                    ...categoryValue,
                    categoryNameValue: res.payload.data.get_category_product_By_Id.category_name,
                })
            }
        })
    }, [id])
    
    const handleChange = (prop) => (event) => {
        setCategoryValue({ ...categoryValue, [prop]: event.target.value });
    };

    const handleUpdateCategory = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const postPayload = new FormData();
            postPayload.append("category_name", categoryValue.categoryNameValue);
            files.forEach(element => {
                postPayload.append("image", element);
            });

            const createRequest = await axios.put(
                `http://localhost:8987/api/v1/category/update/${id}`,
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '45px', width: '100%', maxWidth: '1440px', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', pt: '35px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Kategori</Typography>
                            <TextField
                                onChange={handleChange('categoryNameValue')}
                                value={categoryValue.categoryNameValue}
                                fullWidth
                                placeholder="Kategori"
                                id="fullWidth"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Gambar Kategori</Typography>
                            <section className="container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    {files.length === 0 ? <button className="mb-3 box2-update-product">
                                        <Box className="profil-account1 d-flex">
                                            {dataCategory.image ?
                                                <Box component={'img'}
                                                    className="profil-camera-form1"
                                                    src={`${dataCategory.image}`}
                                                />
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
                                    {rejected[0] && enqueueSnackbar('Gambar Maksimal 1', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 })}
                                </div>
                            </section>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '36px' }}>
                            <Button variant='outlined' onClick={handleCancelCategory} sx={{
                                border: '1px solid #6D7280', color: 'black'
                            }}>Batalkan</Button>
                            <Button onClick={handleUpdateCategory} variant='contained' sx={{
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