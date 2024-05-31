import { styled } from '@mui/material'
import  Button, { ButtonProps } from '@mui/material/Button'

export const StyledButton = styled(Button)<ButtonProps>(({theme}) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
  }
}))
