import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ResearchSlide from './research-slide'
import AdditionalInfo from './additional-info'
import Notifications from './notifications'
import { NotificationContextProvider } from '../../context/notification/notification-context'
import useCurrentBreakpoint from '@/app/hooks/use-current-breakpoint'

function MainContainer() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up('lg'))
  const currentBreakpoint = useCurrentBreakpoint();

  const notificationStyleConfig = isMatch ? { position: 'absolute' } : { position: 'unset' };

  return (
    <Grid container sx={{ flexWrap: 'nowrap', height: '100%', background: '#EEF2F3', paddingLeft: '160px', overflow: 'hidden' }}>
      <Grid item  sx={{ width: '100%', maxWidth: '1200px' }}>
        <ResearchSlide />
        <AdditionalInfo />
      </Grid>
      {currentBreakpoint && 
        <Grid item sx={{ top: '0', right: '0', minHeight: '100%', display: 'flex', maxWidth: '380px', maxHeight: '100vh', width: '100%', background: '#FFFFFF', ...notificationStyleConfig }}>
          <NotificationContextProvider>
              <Notifications /> 
          </NotificationContextProvider>
        </Grid>
      }
    </Grid>
  )
}

export default MainContainer
