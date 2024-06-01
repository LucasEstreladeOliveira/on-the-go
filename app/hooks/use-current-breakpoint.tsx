import { useMediaQuery, useTheme } from '@mui/material';

function useCurrentBreakpoint() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('md'));
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const lg = useMediaQuery(theme.breakpoints.up('md'));

  function getCurrentBreakpoint() {
    if(sm) {
      return 'sm'
    }
    if(md) {
      return 'md'
    }
    if(lg) {
      return 'lg'
    }
    return null;
  }
  
  return getCurrentBreakpoint()
}

export default useCurrentBreakpoint