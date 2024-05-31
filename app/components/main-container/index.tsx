import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ResearchSlide from './research-slide'
import AdditionalInfo from './additional-info'
import Notifications from './notifications'

function MainContainer() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up('lg'))

  const notificationStyleConfig = isMatch ? { position: 'absolute' } : { position: 'unset' };

  return (
    <Grid container sx={{ flexWrap: 'nowrap', height: '100%', background: '#EEF2F3', paddingLeft: '160px' }}>
      <Grid item  sx={{ width: '100%' }}>
        <ResearchSlide />
        <AdditionalInfo />
      </Grid>
      <Grid item sx={{ top: '0', right: '0', minHeight: '100%', display: 'flex', maxWidth: '380px', width: '100%', background: '#FFFFFF', ...notificationStyleConfig }}>
        <Notifications /> 
      </Grid>
    </Grid>
  )
}

export default MainContainer
