import GroupCard from '@/app/components/group-card'
import { ArrowForward, Comment } from '@mui/icons-material'
import { Box, BoxProps, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Notification } from '../../../../../context/notification/notification-context'
import { styled } from '@mui/material'
import  { TypographyProps } from '@mui/material/Typography'
import NotificationIndicator from '@/app/components/notification-indicator'

export const StyledTypography = styled(Typography)<TypographyProps>(({theme}) => ({
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '18px',
  color: '#8A9099',
  fontFamily: 'inherit',
  '& b': {
    fontWeight: '600',
    color: '#000000',
  }
}))

export const StyledNotificationCard = styled(Box)<BoxProps>(({theme}) => ({
  padding: '22px 12px 24px 12px', 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '26px', 
  position: 'relative',
  '.MuiPaper-root': {
    background: 'linear-gradient(to left, white 50%, #FF5D55 50%) right',
    backgroundSize: '200%',
    transition: '.2s ease-out',
  },
  '&:hover .MuiTypography-body2, &:hover svg': {
    color: '#FF5D55'
  },
  '&:hover .MuiPaper-root': {
    border: '1px solid #FF5D55',
    backgroundPosition: 'left',
  },
  '.MuiPaper-root svg': {
    transition: '.2s ease-out',
  },
  '&:hover .MuiPaper-root svg': {
    color: 'white',
  },
}))

function NotificationCard({notification}: {notification: Notification}) {
  return (
    <GroupCard animated>
      <StyledNotificationCard>
        {!notification.read && 
          <Box sx={{ position: 'absolute', top: '14px', right: '12px' }}>
            <NotificationIndicator color='#FF5D55' size={10}/>
          </Box>
        }
        <Grid container gap='6px' sx={{ alignItems: 'center' }}>
            <Grid item><Comment sx={{ fontSize: '14px' }} /></Grid>
            <Grid item><Typography variant='body2' sx={{ fontWeight: '700' }}>{notification.comments} NOVOS COMENTÁRIOS</Typography></Grid>
        </Grid>
        <Grid container sx={{ flexWrap: 'nowrap'}}>
          <Grid item>
            <Box><StyledTypography dangerouslySetInnerHTML={{ __html: notification.mensage }}></StyledTypography></Box>
          </Grid>
          <Grid item sx={{ marginLeft: 'auto' }}>
            <Paper elevation={0} sx={{ height: '38px', width: '38px', border: '1px solid #C9D1D6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowForward fontSize='small'/>
            </Paper>
          </Grid>
        </Grid>
      </StyledNotificationCard>
    </GroupCard>
  )
}

export default NotificationCard