import { Paper } from '@mui/material'
import React, { ReactElement } from 'react'

function RundownCard({children}: {children: React.ReactNode}) {
  return (
    <Paper elevation={2} sx={{background: '#242528', padding: '22px', position: 'relative', color: '#8a9099'}}>
        {children}
    </Paper>
  )
}

export default RundownCard