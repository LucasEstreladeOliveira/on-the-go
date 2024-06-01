import { Paper, PaperProps } from '@mui/material'
import React from 'react'
import styled from 'styled-components';

interface InfoCardType {
    accentColor?: string;
    children: React.ReactNode;
    shadow?: 'sm' | 'md' | 'lg';
    animated?: boolean
}

const CustomOuterPaper = styled(Paper)<PaperProps & InfoCardType>(({theme, shadow, accentColor, animated}) => ({
  paddingBottom: `${shadow === 'md' ? 20 : '10'}px`, 
  background: accentColor,
  '&:hover': animated ? {
    transition: 'all 0.1s ease-in-out',
    transform: 'translate(0px, -10px)',
  } : {},
  '&:hover p, &:hover input::placeholder, &:hover h6': animated ? {
    color: '#FF5D55'
  } : {}
}))

const CustomInnerPaper = styled(Paper)<PaperProps & InfoCardType>(({theme, shadow, accentColor, animated}) => ({
  border: `2px solid ${accentColor}`, 
  margin: 'auto', 
  width: '100%',
  '&:hover #cardBorder': animated ? {
    borderLeft: `2px solid #FF5D55`
  } : {},
  ', &:hover svg': animated ? {
    color: `#FF5D55`
  } : {},
}))

function InfoCard({
    accentColor = '#000000',
    shadow = 'md',
    animated = false,
    children,
}: InfoCardType) {
  return (
    <CustomOuterPaper elevation={0} shadow={shadow} accentColor={accentColor} animated={animated}>
        <CustomInnerPaper elevation={0} accentColor={accentColor} animated={animated}>
            {children}
        </CustomInnerPaper>
    </CustomOuterPaper>
  )
}

export default InfoCard