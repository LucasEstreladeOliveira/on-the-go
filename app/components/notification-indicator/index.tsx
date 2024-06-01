import { Box } from '@mui/material'
import React from 'react'

function NotificationIndicator({ color, size }: {color: string, size: number}) {
  return (
    <Box sx={{ background: color, borderRadius: '50%', height: `${size}px`, width: `${size}px` }}/>
  )
}

export default NotificationIndicator