import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import InfoCard from '../../info-card'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

function ResearchSlide() {
  const [researches, setResearches] = useState([
    { id: 1, location: 'EM CAMPO', title: 'Título da Pesquisa'},
    { id: 2, location: 'EM CAMPO', title: 'Título da Pesquisa'},
    { id: 3, location: 'EM CAMPO', title: 'Título da Pesquisa'},
  ]) 
  return (
    <Box>
      <Box sx={{marginBottom: '28px', marginTop: '50px'}}>
        <Typography variant='h4'>Minhas Pesquisas</Typography>
      </Box>
      <Grid container gap={2} sx={{ position: 'relative', flexWrap: 'nowrap' }}>
        <Grid item sx={{ position: 'absolute', transform: 'translate(-62px, -50%)', top: '50%' }}>
          <Paper elevation={0} sx={{ height: '46px', width: '46px', background: '#C9D1D6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowBackIosNew /></Paper>
        </Grid>
        {researches.map(research => (
          <Grid item key={research.id}>
            <InfoCard>
                <Box>{research.location}</Box>
                <Box>{research.title}</Box>
            </InfoCard>
          </Grid>
        ))}
        <Grid item sx={{alignItems: 'center', display: 'flex'}}>
          <Paper elevation={0} sx={{ height: '46px', width: '46px', background: '#C9D1D6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowForwardIos /></Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ResearchSlide