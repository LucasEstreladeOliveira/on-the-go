import { Grid } from '@mui/material'
import React from 'react'
import RundownCard from './rundown-card'
import FieldResearch from './field-research'
import ScreenWrittingResearch from './screen-writting-research'
import FiredReports from './fired-reports'
import useCurrentBreakpoint from '@/app/hooks/use-current-breakpoint'

function Rundown() {
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Grid container maxWidth={currentBreakpoint === 'lg' ? '60em' : 'none'} gap={2} sx={{ marginTop: '14px', flexWrap: 'nowrap' }}>
      <Grid item sx={{ width: '100%'}}>
        <RundownCard>
          <FieldResearch />
        </RundownCard>
      </Grid>
      <Grid item sx={{ width: '100%'}}>
        <RundownCard>
          <ScreenWrittingResearch />
        </RundownCard>
      </Grid>
      <Grid item sx={{ width: '100%'}}>
        <RundownCard>
          <FiredReports />
        </RundownCard>
      </Grid>
    </Grid>
  )
}

export default Rundown