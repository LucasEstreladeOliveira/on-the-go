import { Grid } from '@mui/material'
import React from 'react'

function SliderPagination({pages, activePage}: {pages: number[], activePage: number}) {
    return (
    <Grid container gap="6px" sx={{ marginTop: '16px', justifyContent: 'center'}}>
        {pages.map((page) => <Grid item key={page} sx={{height: '12px', width: '12px', borderRadius: '50%', background: `${activePage === page ? '#000000' : '#C9D1D6'}` }}></Grid>)}
    </Grid>
  )
}

export default SliderPagination