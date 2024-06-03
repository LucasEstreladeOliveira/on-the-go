'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material'
import  Button, { ButtonProps } from '@mui/material/Button'
import LogoSVG from '../../assets/logo.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const StyledButton = styled(Button)<ButtonProps>(({theme}) => ({
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  border: '1px solid #242528',
  borderRadius: '4px',
  padding: '6px 12px',
  textTransform: 'none',
}))

const pages = ['Pesquisas', 'Créditos', 'Campanhas', 'Equipe', 'Configurações'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up('lg'))

  const navStyleConfig = isMatch ? { position: 'sticky' } : { position: 'static' };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ borderBottom: '1px solid #242528', boxShadow: 'unset', ...navStyleConfig }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
            <Box sx={{ marginRight: '26px', display: 'flex', flexShrink: '0' }} >
                <Image src={logo} alt='logo' width={36} height={36}/>
            </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '22px' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: '#8A9099', display: 'block', fontSize:"12px" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Grid container gap='24px' sx={{ justifyContent: 'flex-end', alignItems: 'center'}}>
            <Grid item>
              <StyledButton startIcon={<LogoSVG alt="logo" />}>ACME Corporation</StyledButton>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center'}}>
              <Grid container>
                <Grid item>
                  <Box><Typography variant='body1' sx={{ fontWeight: '500' }}>Adriano Lima</Typography></Box>
                  <Box><Typography variant='caption' sx={{ color: '#8A9099' }}>adriano.lima@acmecorp.com</Typography></Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Tooltip title="Open settings">
                <MoreVertIcon />
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;