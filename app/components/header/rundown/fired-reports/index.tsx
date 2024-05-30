import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'

const TOTAL = 10000
function FiredReports() {
  const [currentAmount, setCurrentAmount] = useState(2000)
  const completed = 40;
  return (
    <>
      <Box sx={{ marginBottom: '42px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Grid container sx={{ alignItems: 'flex-end' }}>
          <Grid item sx={{ color: '#FFFFFF', fontSize: '30px', lineHeight: '100%' }}>{currentAmount}</Grid>
          <Grid item sx={{ fontSize: '18px', lineHeight: '100%' }}>/{TOTAL}</Grid>
        </Grid>
        <Box maxWidth='108px' sx={{ fontSize: '14px' }}>
          DISPAROS FEITOS
        </Box>
      </Box>
      <Box sx={{ border: '1px solid #FFFFFF', borderRadius: '12px' }}>
        <Box sx={{ backgroundColor: '#FFFFFF', width: `${40}%`, borderRadius: '12px', height: '12px'}} />
      </Box>    
    </>
  )
}

export default FiredReports
