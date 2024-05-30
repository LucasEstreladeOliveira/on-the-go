import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'

function ScreenWrittingResearch() {
  const [currentAmount, setCurrentAmount] = useState(300)
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