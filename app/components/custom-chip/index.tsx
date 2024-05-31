import { styled } from '@mui/material'
import  Chip, { ChipProps } from '@mui/material/Chip'

export const StyledChip = styled(Chip)<ChipProps>(({theme}) => ({
  background: theme.palette.info.main,
  color: theme.palette.common.white,
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '14.1px',
  height: 'auto',
  '& .MuiChip-label': {
    padding: '2px 10px',
  }
}))
