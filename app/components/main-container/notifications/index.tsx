import { Box, Drawer, Grid, Typography } from '@mui/material'
import { DrawerProps } from '@mui/material/Drawer'
import React, { useContext, useEffect } from 'react'
import { StyledTab, StyledTabs } from '../../custom-tab'
import { StyledChip } from '../../custom-chip'
import NotificationList from './notification-list';
import { NotificationContext } from '../../../context/notification/notification-context';
import useCurrentBreakpoint from '../../../hooks/use-current-breakpoint';
import styled from 'styled-components';


function Notifications() {
  const { notifications } = useContext(NotificationContext);
  const currentBreakpoint = useCurrentBreakpoint();

  const CustomDrawer = styled(Drawer)<DrawerProps>(({theme}) => ({
    '& .MuiDrawer-paper': {
      height: '100vh',
      width: '380px',
      overflow: 'hidden',
      zIndex: 'unset',
      position: currentBreakpoint === 'lg' ? 'fixed' : 'static'
    },
    '& .MuiDrawer-paper>.MuiBox-root': {
      height: currentBreakpoint === 'lg' ? '100vh' : '100%',
    },
  }))

  return (
    <CustomDrawer open={true} anchor='right' hideBackdrop variant='permanent'>
      <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', boxShadow: '0px 3px 6px 0px #00000029' }}>
          <Box sx={{ marginLeft: '24px', marginTop: `${currentBreakpoint === 'lg' ? '82px' : '16px'}` }}>
            <Grid container sx={{ marginBottom: '44px', alignItems: 'center', gap: '6px' }}>
              <Grid item>
                <Typography variant='h6'>Atualizações</Typography>
              </Grid>
              <Grid item>
                <StyledChip color="info" label={`${notifications?.length ?? 0}`} size='small' />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: '0px 20px' }}>
            <StyledTabs value={0}>
              <StyledTab label="TODAS"></StyledTab>
            </StyledTabs>
          </Box>
        </Box>
        <Box sx={{ overflow: 'auto', display: 'flex', height: '100%' }}>
          <NotificationList />
        </Box>
      </Box>
    </CustomDrawer>
  )
}

export default Notifications