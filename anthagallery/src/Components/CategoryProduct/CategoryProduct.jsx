import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function CategoryProduct() {
    return (
        <>
            <Box sx={{ display: 'flex', ml: '135px', mr: '135px', mt: '84px' }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1440px', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '38px', fontFamily: 'Axiforma' }}>Explore Category</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '16px', fontFamily: 'Axiforma' }}>See All</Typography>
                    </Box>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            asdasd
                        </Grid>
                        <Grid item xs={3}>
                            asdas
                        </Grid>
                        <Grid item xs={3}>
                            sd
                        </Grid>
                        <Grid item xs={3}>
                            xvssdf
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default CategoryProduct