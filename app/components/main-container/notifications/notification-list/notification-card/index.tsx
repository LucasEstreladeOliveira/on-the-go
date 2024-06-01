import GroupCard from '@/app/components/group-card'
import { ArrowForward, Comment } from '@mui/icons-material'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Notification } from '../../../../../context/notification/notification-context'
import { styled } from '@mui/material'
import  { TypographyProps } from '@mui/material/Typography'

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

function NotificationCard({notification}: {notification: Notification}) {
  return (
    <GroupCard>
      <Box sx={{ padding: '22px 12px 24px 12px', display: 'flex', flexDirection: 'column', gap: '26px', position: 'relative'}}>
        {!notification.read && 
          <Box sx={{ width: '10px', height: '10px', background: '#FF5D55', borderRadius: '50%', position: 'absolute', top: '14px', right: '12px' }}></Box>
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
      </Box>
    </GroupCard>
  )
}

export default NotificationCard