import { Box, Grid, Paper, PaperProps, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

interface GroupCardType {
  children: React.ReactNode;
  title?: string
  titleIcon?: React.ReactNode,
  animated?: boolean
}

export const StyledgGroudCard = styled(Paper)<PaperProps & GroupCardType>(({theme, animated}) => ({
  border: '1px solid #C9D1D6', 
  width: '100%',
  '&:hover': animated ? {
    border: '1px solid #FF5D55',
  } : {}
}))

function GroupCard({ children, title, titleIcon, animated = false }: GroupCardType) {
  return (
    <StyledgGroudCard elevation={0} animated={animated}>
      {title && (
        <Grid container paddingX={2} paddingY={1} gap='4px' sx={{ alignItems: 'center', borderBottom: '1px solid #C9D1D6'}}>
          <Grid item sx={{ display: 'flex' }}>
            {titleIcon ?? null}
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>{title}</Typography>
          </Grid>
        </Grid>
      )}
      {children}
    </StyledgGroudCard>
  )
}

export default GroupCard