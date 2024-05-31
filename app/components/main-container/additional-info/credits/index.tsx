import GroupCard from '@/app/components/group-card'
import InfoCard from '@/app/components/info-card'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function Credits() {
  return (
    <Grid item sx={{ display: 'flex', width: '100%'}}>
        <GroupCard>
          <Box sx={{ padding: '16px 0px 0px 20px' }}><Typography variant='subtitle1'>CRÉDITOS PARA PAINEL</Typography></Box>
          <Box sx={{ marginBottom: '16px', marginX: '65px', marginTop: '18px', display: 'flex', flexDirection: 'column' }} gap={'12px'}>
            <Box>
                <InfoCard 
                  accentColor='#0AD2A5'
                  shadow='sm'
                >
                  <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingY: '15px' }}>
                    <Box>
                      <Typography variant='h1'>1.500</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', display: 'flex', whiteSpace: 'break-spaces', textWrap: 'nowrap' }}>
                    <Typography variant='body2'>{'CRÉDITOS\nDISPONÍVEIS'}</Typography>
                    </Box>
                  </Box>
                </InfoCard>
            </Box>
            <Grid container gap={2} sx={{ flexWrap: 'nowrap' }}>
              <Grid item sx={{width: '100%'}}>
                <InfoCard 
                  accentColor='#C7B2FF'
                  shadow='sm'
                >
                  <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', paddingY: '19px' }}>
                    <Box>
                      <Typography variant='h2'>300</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', display: 'flex', whiteSpace: 'break-spaces', textWrap: 'nowrap' }}>
                    <Typography variant='subtitle2'>{'CRÉDITOS\nEM CAMPO'}</Typography>
                    </Box>
                  </Box>
                </InfoCard>
              </Grid>
              <Grid item sx={{width: '100%'}}>
                <InfoCard 
                  accentColor='#8A9099'
                  shadow='sm'
                >
                  <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#8A9099', paddingY: '19px'}}>
                    <Box>
                      <Typography variant='h2'>600</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', display: 'flex', whiteSpace: 'break-spaces', textWrap: 'nowrap' }}>
                    <Typography variant='subtitle2'>{'CRÉDITOS\nRESERVADOS'}</Typography>
                    </Box>
                  </Box>
                </InfoCard>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{padding: '0px 20px 16px 20px'}}>
            <Button variant='outlined' fullWidth sx={{ border: '1px solid #C9D1D6', fontSize: '12px', lineHeight: '14.1px', fontWeight: '700', fontFamily: 'inherit', paddingY: '12px'}}>
              GERENCIAR CRÉDITOS
            </Button>
          </Box>
        </GroupCard>
      </Grid>
  )
}

export default Credits