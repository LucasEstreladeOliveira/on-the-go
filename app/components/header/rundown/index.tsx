import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import RundownCard from './rundown-card'
import FieldResearch from './field-research'

function Rundown() {
  return (
    <Grid container maxWidth={"60em"} gap={2} sx={{marginTop: '14px'}}>
      <Grid item xs={2.6}>
        <RundownCard>
          <FieldResearch />
        </RundownCard>
      </Grid>
      <Grid item xs={2.6}>
        <RundownCard>PESQUISAS EM ROTEIRIZAÇÃO</RundownCard>
      </Grid>
      <Grid item xs={2.6}>
        <RundownCard>DISPAROS FEITOS</RundownCard>
      </Grid>
    </Grid>
  )
}

export default Rundown