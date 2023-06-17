import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { useSnackbar } from 'notistack'
import { useDropzone } from "react-dropzone";
import axios from 'axios'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function AddCategoryAdmin() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const handleCancelCategory = () => {
        navigate(-1)
    }

    const categoryNameField = React.useRef("");

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
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    const handleCreateCategory = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const postPayload = new FormData();
            postPayload.append("category_name", categoryNameField.current.value);
            files.forEach(element => {
                postPayload.append("image", element);
            });
            const createRequest = await axios.post(
                "https://anthagallery-server.up.railway.app/api/v1/category/create",
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '45px', width: '100%', maxWidth: '1440px', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', pt: '35px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Kategori</Typography>
                            <TextField
                                inputRef={categoryNameField}
                                fullWidth
                                id="fullWidth"
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', px: '36px', width: '100%', maxWidth: '1440px', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 400, fontFamily: 'Axiforma' }}>Gambar Kategori</Typography>
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
                        <Box sx={{ display: 'flex', gap: '36px' }}>
                            <Button variant='outlined' onClick={handleCancelCategory} sx={{
                                border: '1px solid #6D7280', color: 'black'
                            }}>Batalkan</Button>
                            <Button onClick={handleCreateCategory} variant='contained' sx={{
                                height: '56px', backgroundColor: 'black', fontFamily: 'Axiforma', ":hover": {
                                    bgcolor: "black"
                                }, fontSize: '16px'
                            }}>Tambahkan Kategori</Button>
                        </Box>
                    </Box>
                </Box>
            </Dashboard>
        </>
    )
}

export default AddCategoryAdmin