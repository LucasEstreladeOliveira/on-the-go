import { Paper } from '@mui/material'
import React, { ReactElement } from 'react'

function RundownCard({children}: {children: React.ReactNode}) {
  return (
    <Paper elevation={2} sx={{background: '#242528', padding: '22px', position: 'relative', color: '#8a9099', height: '100%', lineHeight: '16.45px'}}>
        {children}
    </Paper>
  )
}

export default RundownCard