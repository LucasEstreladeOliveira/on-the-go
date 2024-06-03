import { HomeContext } from '@/app/context/home/home-context';
import { Box, Grid } from '@mui/material'
import React, { useContext, useState } from 'react'

function FiredReports() {
  const { data } = useContext(HomeContext);
  const currentAmount = data?.audience?.sended.toLocaleString('pt-BR') || 0;
  const total = data?.audience?.balance.toLocaleString('pt-BR') || 0;
  const completed = currentAmount ? (Number(currentAmount) * 100) / Number(total) : 0;

  return (
    <>
      <Box sx={{ marginBottom: '42px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Grid container sx={{ alignItems: 'flex-end' }}>
          <Grid item sx={{ color: '#FFFFFF', fontSize: '30px', lineHeight: '100%' }}>{currentAmount}</Grid>
          <Grid item sx={{ fontSize: '18px', lineHeight: '100%' }}>/{total}</Grid>
        </Grid>
        <Box maxWidth='108px' sx={{ fontSize: '14px' }}>
          DISPAROS FEITOS
        </Box>
      </Box>
      <Box sx={{ border: '1px solid #FFFFFF', borderRadius: '12px' }}>
        <Box sx={{ backgroundColor: '#FFFFFF', width: `${completed}%`, borderRadius: '12px', height: '12px', transition: 'all 0.5s ease-out' }} />
      </Box>    
    </>
  )
}

export default FiredReports
