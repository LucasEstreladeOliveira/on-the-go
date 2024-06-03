import NotificationIndicator from '@/app/components/notification-indicator';
import { HomeContext } from '@/app/context/home/home-context';
import { Box, Grid } from '@mui/material'
import React, { useContext, useState } from 'react'

function FieldResearch() {
  const { data } = useContext(HomeContext);
  const runningResearches = data?.researches.running?.split('/')
  const currentAmount = runningResearches?.[0] ?? 0
  const total = runningResearches?.[1] ?? 0

  return (
    <>  
      <Box sx={{ position: 'absolute', right: '6px', top: '10px' }}>
        <NotificationIndicator size={6} color='#0AD2A5' />
      </Box>
      <Box sx={{ marginBottom: '42px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Grid container sx={{ alignItems: 'flex-end' }}>
          <Grid item sx={{ color: '#FFFFFF', fontSize: '30px', lineHeight: '100%' }}>{ currentAmount }</Grid>
          <Grid item sx={{ fontSize: '18px', lineHeight: '100%' }}>/{total}</Grid> 
        </Grid>
        <Box maxWidth='84px' sx={{ fontSize: '14px' }}>
          PESQUISAS EM CAMPO
        </Box>
      </Box>
      <Grid container gap='6px'>
        {Array.from(Array(Number(total)).keys()).map(value => (
          <Grid item key={value} sx={{ border: '1px solid white', borderRadius: '50%', width: '12px', height: '12px' }}></Grid>
        ))}
      </Grid>
    </>
  )
}

export default FieldResearch