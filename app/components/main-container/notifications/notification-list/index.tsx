import React, { useState } from 'react'
import NotificationCard from './notification-card'
import { Box, Typography } from '@mui/material'

function NotificationList() {
  const [notificationList, setNotificationList] = useState([
    {
      id: 1,
      title: '2 NOVOS COMENTÁRIOS',
      content: 'Seu time esta colaborando em ACME Corp: Promoção Verão da Sorte'
    },
    {
      id: 2,
      title: '2 NOVOS COMENTÁRIOS',
      content: 'Seu time esta colaborando em ACME Corp: Promoção Verão da Sorte'
    },
    {
      id: 3,
      title: '2 NOVOS COMENTÁRIOS',
      content: 'Seu time esta colaborando em ACME Corp: Promoção Verão da Sorte'
    },
    {
      id: 4,
      title: '2 NOVOS COMENTÁRIOS',
      content: 'Seu time esta colaborando em ACME Corp: Promoção Verão da Sorte'
    },
    {
      id: 5,
      title: '2 NOVOS COMENTÁRIOS',
      content: 'Seu time esta colaborando em ACME Corp: Promoção Verão da Sorte'
    },
    {
      id: 6,
      title: '2 NOVOS COMENTÁRIOS',
      content: 'Seu time esta colaborando em ACME Corp: Promoção Verão da Sorte'
    },
  ]);

  return (
    <Box sx={{ margin: '30px 17px' }}>
      <Box sx={{ marginLeft: '20px' }}>
        <Typography variant='caption' sx={{ color: '#8A9099' }}>Hoje</Typography>
      </Box>
      <Box sx={{ width: '1px', height: '16px', background: '#E0E4E7', marginLeft: '36px' }}></Box>
      {
        notificationList.map((notification, index) => (
          <React.Fragment key={notification.id}>
            <NotificationCard />
            { index !== notificationList.length - 1 &&
              <Box sx={{ width: '1px', height: '16px', background: '#E0E4E7', marginLeft: '36px' }}></Box>
            }
          </React.Fragment>
        ))
      }
    </Box>
  )
}

export default NotificationList