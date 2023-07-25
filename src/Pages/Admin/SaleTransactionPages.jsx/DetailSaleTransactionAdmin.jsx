import React from 'react'
import Dashboard from '../Dashboard'
import { Box, Button, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSaleTransactionById } from '../../../Redux/slices/AdminReducer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSnackbar } from 'notistack';

function DetailSaleTransactionAdmin() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { id } = useParams();

    const dataSaleById = useSelector(state => state.admin.getDataSaleTransactionSingle);
    React.useEffect(() => {
        dispatch(getSaleTransactionById(id))
    }, [])

    const handleBackDetail = () => {
        navigate('/admin/sale-transaction')
    }

    const parsedDate = new Date(dataSaleById.createdAt);
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();
    const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

    const printPDF = () => {
        window.scrollTo(0, 0);
        const domElement = document.getElementById("App");
        html2canvas(domElement, {
            scale: 3,
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: domElement.scrollHeight,
            allowTaint: true,
            useCORS: true,
            onclone: (document) => {
                document.getElementById("print").style.visibility = "hidden";
            },
        }).then((canvas) => {

            const imgData = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");

            const pdf = new jsPDF("p", "mm", "a4");
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "JPEG", 1, 1, pdfWidth, pdfHeight);
            pdf.save(`Nota_penjualan_${dataSaleById.transaction_code}.pdf`);
            enqueueSnackbar('Nota Berhasil di Unduh.', { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 1500 });
        });
    };

    return (
        <>
            <Dashboard>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: '20px', gap: '24px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#317276' }}>Detail Transaksi</Typography>
                        <Button id="print" onClick={printPDF} variant='contained' sx={{
                            width: '199px', height: '40px', backgroundColor: '#317276', fontFamily: 'Axiforma', ":hover": {
                                bgcolor: "#317276"
                            }
                        }}>Download Nota</Button>
                        <Box onClick={handleBackDetail} sx={{ display: 'flex', cursor: 'pointer' }}>
                            <ArrowBackIcon sx={{ color: '#317276' }} />
                            <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#317276' }}>Kembali</Typography>
                        </Box>
                    </Box>

                    <Box className="page-agency">
                        <Box className='App' id="App">
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ color: '#FFD12D', fontSize: '24px', fontWeight: 600, lineHeight: '39px', fontFamily: 'Axiforma' }}>Antha</Typography>
                                    <Typography sx={{ color: 'black', fontSize: '24px', fontWeight: 600, lineHeight: '39px', fontFamily: 'Axiforma' }}>Gallery</Typography>
                                </Box>
                                <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 600, }}>Nota Penjualan</Typography>
                            </Box>
                            {Object.keys(dataSaleById).length !== 0 ?
                                <Box sx={{ px: '36px', py: '36px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #D2D5DA' }}>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 400 }}>Kode Penjualan</Typography>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 600, }}>{dataSaleById.transaction_code}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #D2D5DA' }}>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 400 }}>Tanggal Penjualan</Typography>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 600 }}>{formattedDate}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #D2D5DA' }}>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 400 }}>Nama Produk</Typography>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 600, textAlign: 'end' }}>{dataSaleById.product_id.product_name}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #D2D5DA' }}>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 400 }}>Jumlah</Typography>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 600 }}>{dataSaleById.amount}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #D2D5DA' }}>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 400 }}>Biaya</Typography>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 600 }}>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(dataSaleById.product_id.product_price)}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #D2D5DA' }}>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 400 }}>Total Biaya</Typography>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '15px', md: '20px' }, fontWeight: 600 }}>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(dataSaleById.amount * dataSaleById.product_id.product_price)}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                :
                                <Typography>
                                    Loading...
                                </Typography>
                            }
                        </Box>
                    </Box>
                </Box>
            </Dashboard>
        </>
    )
}

export default DetailSaleTransactionAdmin