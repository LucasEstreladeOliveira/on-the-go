import React, { useContext, useState } from 'react'
import NotificationCard from './notification-card'
import { Box, Typography } from '@mui/material'
import { NotificationContext } from '../../../../context/notification/notification-context';

function NotificationList() {
  const { notifications } = useContext(NotificationContext);

  return (
    <Box sx={{ margin: '30px 17px', width: '100%' }}>
      {notifications?.length > 0 &&
        <>
          <Box sx={{ marginLeft: '20px' }}>
            <Typography variant='caption' sx={{ color: '#8A9099' }}>Hoje</Typography>
          </Box>
          <Box sx={{ width: '1px', height: '16px', background: '#E0E4E7', marginLeft: '36px' }}></Box>
          {
            notifications.map((notification, index) => (
              <React.Fragment key={notification.id}>
                <NotificationCard notification={notification} />
                {index !== notifications.length - 1 &&
                  <Box sx={{ width: '1px', height: '16px', background: '#E0E4E7', marginLeft: '36px' }}></Box>
                }
                {index === notifications.length - 1 &&
                  <Box sx={{ height: '16px' }}></Box>
                }
              </React.Fragment>
            ))
          }
        </>
      }
    </Box>
  )
}

export default NotificationList