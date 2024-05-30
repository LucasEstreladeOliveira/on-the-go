import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'

const TOTAL = 5

function FieldResearch() {
  const [currentAmount, setCurrentAmount] = useState(0);
  return (
    <>  
      <Box sx={{ position: 'absolute', background:'#0AD2A5', height: '6px', width: '6px', borderRadius: '50%', right: '6px', top: '10px' }} />
      <Box sx={{ marginBottom: '42px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Grid container sx={{ alignItems: 'flex-end' }}>
          <Grid item sx={{ color: '#FFFFFF', fontSize: '30px', lineHeight: '100%' }}>{ currentAmount }</Grid>
          <Grid item sx={{ fontSize: '18px', lineHeight: '100%' }}>/{TOTAL}</Grid> 
        </Grid>
        <Box maxWidth='84px' sx={{ fontSize: '14px' }}>
          PESQUISAS EM CAMPO
        </Box>
      </Box>
      <Grid container gap='6px'>
        {Array.from(Array(TOTAL).keys()).map(value => (
          <Grid item key={value} sx={{ border: '1px solid white', borderRadius: '50%', width: '12px', height: '12px' }}></Grid>
        ))}
      </Grid>
    </>
  )
}

export default FieldResearch