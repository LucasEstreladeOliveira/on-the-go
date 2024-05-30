import { Grid } from '@mui/material'
import React from 'react'
import RundownCard from './rundown-card'
import FieldResearch from './field-research'
import ScreenWrittingResearch from './screen-writting-research'
import FiredReports from './fired-reports'

function Rundown() {
  return (
    <Grid container maxWidth={"60em"} gap={2} sx={{ marginTop: '14px' }}>
      <Grid item xs={2.6}>
        <RundownCard>
          <FieldResearch />
        </RundownCard>
      </Grid>
      <Grid item xs={2.6}>
        <RundownCard>
          <ScreenWrittingResearch />
        </RundownCard>
      </Grid>
      <Grid item xs={2.6}>
        <RundownCard>
          <FiredReports />
        </RundownCard>
      </Grid>
    </Grid>
  )
}

export default Rundown