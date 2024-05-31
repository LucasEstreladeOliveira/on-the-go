import { Paper, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import useCurrentBreakpoint from '../../hooks/use-current-breakpoint';

interface InfoCardType {
    accentColor?: string;
    children: React.ReactNode;
    shadow?: 'sm' | 'md' | 'lg';
}

function InfoCard({
    accentColor = '#000000',
    shadow = 'md',
    children,
}: InfoCardType) {
  return (
    <Paper elevation={0} sx={{ paddingBottom: `${shadow === 'md' ? 20 : '10'}px`, background: accentColor }}>
        <Paper elevation={0} sx={{ border: `2px solid ${accentColor}`, margin: 'auto', width: '100%' }} >
            {children}
        </Paper>
    </Paper>
  )
}

export default InfoCard