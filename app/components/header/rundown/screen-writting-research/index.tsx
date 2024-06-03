import { HomeContext } from '@/app/context/home/home-context';
import { Box, Grid } from '@mui/material'
import React, { useContext, useState } from 'react'

function ScreenWrittingResearch() {
  const { data } = useContext(HomeContext);
  const currentAmount = data?.researches.scripting?.toLocaleString('pt-BR') || 0

  return (
    <>
      <Box sx={{ marginBottom: '42px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Box sx={{ color: '#FFFFFF', fontSize: '30px', lineHeight: '100%' }}>{currentAmount}</Box>
        <Box maxWidth='108px' sx={{ fontSize: '14px' }}>
          PESQUISAS EM ROTEIRIZAÇÃO
        </Box>
      </Box>
    </>
  )
}

export default ScreenWrittingResearch