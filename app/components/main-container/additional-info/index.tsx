import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import React, { useContext } from 'react'
import Credits from './credits'
import GroupCard from '../../group-card'
import { ArrowForward, Email } from '@mui/icons-material';
import { StyledButton } from '../../custom-button';
import { HomeContext } from '@/app/context/home/home-context';

function AdditionalInfo() {
  const { data } = useContext(HomeContext);
  const contacts = data?.audience?.contacts?.toLocaleString('pt-BR') || 0;
  const sended = data?.audience?.sended?.toLocaleString('pt-BR') || 0;
  const balance = data?.audience?.balance?.toLocaleString('pt-BR') || 0;

  return (
    <Grid container sx={{ marginY: '55px', flexWrap: 'nowrap', paddingRight: '60px' }} gap={2}>
      <Credits />
      <Grid item gap={2} sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Box>
          <GroupCard title='AUDIÊNCIA' titleIcon={<FolderSharedIcon fontSize='small' />}>
            <Grid container sx={{ padding: '20px 22px 30px 28px' }}>
              <Grid item>
                <Box><Typography variant='h1'>{contacts}</Typography></Box>
                <Box><Typography variant='body1'>Contantos</Typography></Box>
              </Grid>
              <Grid item sx={{ marginLeft: 'auto' }}>
                <Paper elevation={0} sx={{ height: '46px', width: '46px', border: '1px solid #C9D1D6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowForward />
                </Paper>
              </Grid>
            </Grid>
          </GroupCard>
        </Box>
        <Box>
          <GroupCard title='DISPAROS' titleIcon={<Email fontSize='small' />}>
            <Grid container sx={{ padding: '20px 22px 0px 28px', alignItems: 'flex-end' }}>
              <Grid item sx={{display: 'flex'}}>
                <Typography variant='h1' sx={{lineHeight: 'calc(100% - 8px)'}}>{sended}</Typography>
              </Grid>
              <Grid item sx={{color: '#8A9099'}}>
                <Typography variant='h5'>/{balance}</Typography>
              </Grid>
            </Grid>
            <Box sx={{ padding: '0px 2px 20px 28px' }}><Typography variant='body1'>Disparos feitos</Typography></Box>
            <Box sx={{ padding: '0px 12px 16px 12px' }}>
              <StyledButton variant='outlined' fullWidth sx={{ border: '1px solid #C9D1D6', fontSize: '12px', fontWeight: '700', fontFamily: 'inherit', paddingY: '12px' }}>
                IR PARA CAMAPANHAS
              </StyledButton>
            </Box>
          </GroupCard>
        </Box>
      </Grid>
    </Grid>
  )
}

export default AdditionalInfo