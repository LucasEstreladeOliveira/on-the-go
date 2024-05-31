import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { StyledTab, StyledTabs } from '../../custom-tab'
import { StyledChip } from '../../custom-chip'
import NotificationList from './notification-list';

function Notifications() {
  return (
    <Box sx={{display: 'flex', width: '100%', flexDirection: 'column'}}>
      <Box sx={{display: 'flex', width: '100%', flexDirection: 'column', boxShadow: '0px 3px 6px 0px #00000029' }}>
        <Box sx={{ marginLeft: '24px', marginTop: '16px' }}>
          <Grid container sx={{ marginBottom: '44px', alignItems: 'center', gap: '6px' }}>
            <Grid item>
              <Typography variant='h6'>Atualizações</Typography>
            </Grid>
            <Grid item>
              <StyledChip color="info" label="3" size='small' />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{padding: '0px 20px'}}>
          <StyledTabs value={0}>
            <StyledTab label="TODAS"></StyledTab>
          </StyledTabs>
        </Box>
      </Box>
      <Box sx={{ overflow: 'auto' }}>
        <NotificationList />
      </Box>
    </Box>
  )
}

export default Notifications