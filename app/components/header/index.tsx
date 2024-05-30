import { Box, Typography } from '@mui/material'
import React from 'react'
import Rundown from './rundown'

function Header() {
  return (
    <Box sx={{background: '#000000', color: '#FFFFFF'}} px={20} py={4}>
      <Typography variant='subtitle2'>RESUMO MENSAL</Typography>
      <Typography variant='h4'>JANEIRO, 2023</Typography>
      <Rundown /> 
    </Box>
  )
}

export default Header