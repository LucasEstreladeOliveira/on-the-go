import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

interface GroupCardType {
  children: React.ReactNode;
  title?: string
  titleIcon?: React.ReactNode
}
function GroupCard({ children, title, titleIcon }: GroupCardType) {
  return (
    <Paper elevation={0} sx={{ border: '1px solid #C9D1D6', width: '100%' }}>
      {title && (
        <Grid container paddingX={2} paddingY={1} gap='4px' sx={{ alignItems: 'center', borderBottom: '1px solid #C9D1D6'}}>
          <Grid item sx={{ display: 'flex' }}>
            {titleIcon ?? null}
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>{title}</Typography>
          </Grid>
        </Grid>
      )}
      {children}
    </Paper>
  )
}

export default GroupCard