import React from 'react'
import Dashboard from '../Dashboard'
import { Box, Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import { DataGrid, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHistoryChat } from '../../../Redux/slices/AdminReducer';
import empty from '../../../Assets/GIF/empty-box.gif'


function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page + 1}
            count={pageCount}
            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

function HistoryChatPage() {
    const dispatch = useDispatch()
    const dataHistoryChat = useSelector(state => state.admin.getDataHistoryChat);
    React.useEffect(() => {
        dispatch(getAllHistoryChat())
    }, [])


    const columns = [
        { field: 'userName', headerName: 'Nama User', flex: 1, },
        { field: 'product_name', headerName: 'Nama Produk', width: 200 },
        { field: 'chat_users', headerName: 'Chat User', flex: 1 },
        {
            field: 'createdAt', headerName: 'Tanggal', flex: 1,
                valueGetter: (params) => {
                const date = new Date(params.row.createdAt);
                const formattedDate = date.toLocaleDateString();
                const formattedTime = date.toLocaleTimeString();
                return `${formattedDate} | ${formattedTime}`;
            },
        },
    ];
    return (
        <>
            <Dashboard>
                {Object.keys(dataHistoryChat).length !== 0 ?
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mt: '20px', width: '100%', maxWidth: '1440px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Axiforma' }}>History Chat User</Typography>
                        </Box>
                        <Box sx={{ height: 'auto', overflow: "auto", width: '100%' }}>
                            <DataGrid
                                autoHeight={true}
                                rows={Object.keys(dataHistoryChat).length !== 0 ? dataHistoryChat.map(item => ({
                                    ...item,
                                    userName: item.user_id?.userName,
                                    product_name: item.product_id?.product_name,
                                })) : ''}
                                getRowId={(row) => row._id}
                                columns={columns}
                                pageSize={Object.keys(dataHistoryChat).length !== 0 && Object.keys(dataHistoryChat).length < 9 ? Object.keys(dataHistoryChat).length : 9}
                                rowsPerPageOptions={[10]}
                                components={{
                                    Pagination: CustomPagination,
                                    NoRowsOverlay: () => (
                                        <Stack height="100%" alignItems="center" justifyContent="center">
                                            Tidak ada data yang tersedia di tabel ini
                                        </Stack>
                                    ),
                                    NoResultsOverlay: () => (
                                        <Stack height="100%" alignItems="center" justifyContent="center">
                                            Filter tidak menemukan hasil
                                        </Stack>
                                    )
                                }}
                                sx={{ maxWidth: { xs: 'unset', xl: '1440px' } }}
                            />
                        </Box>
                    </Box>
                    :
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '70vh' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box component={'img'} src={empty} sx={{ width: '272px', height: '272px' }} />
                                    <Typography sx={{ color: '#6D7280', fontSize: '18px' }}>Kamu tidak memiliki chat dari user</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                }
            </Dashboard>
        </>
    )
}

export default HistoryChatPage