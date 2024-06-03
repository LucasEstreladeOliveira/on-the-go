import { Box, Button, ButtonProps, Grid, Typography } from '@mui/material'
import React from 'react'
import Rundown from './rundown'
import Image from 'next/image'
import newSearch from '../../assets/new-search.gif'
import styled from 'styled-components'
import useCurrentBreakpoint from '@/app/hooks/use-current-breakpoint';
import CloseIcon from '@mui/icons-material/Close';

const NewSearchButton = styled(Button)<ButtonProps>(({theme}) => ({
  display: 'flex', 
  gap: '12px',
  alignItems: 'center',
  padding: '12px 0px',
  background: 'linear-gradient(#FFFFFF, #FFFFFF 50%, #000000 50%, #000000)',
  backgroundSize: '100% 201%',
  transition: 'background .2s',
  '& svg': {
    transform: 'rotate(45deg)',
    transition: 'all .2s',
    fontSize: '16px'

  },
  '&:hover': {
    color: '#FFFFFF',
    backgroundPosition: '100% 100%',
  },
  '&:hover svg': {
    transform: 'rotate(135deg)'
  },
}))

function Header() {
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Grid container sx={{ background: '#000000', color: '#FFFFFF', flexWrap: 'nowrap', paddingRight: currentBreakpoint === 'lg' ? '380px' : 'unset' }} px={20} py={4}>
      <Grid item sx={{width: '100%', marginRight: '72px' }}>
        <Typography variant='subtitle2'>RESUMO MENSAL</Typography>
        <Typography variant='h3'>JANEIRO, 2023</Typography>
        <Rundown />
      </Grid>
      <Grid item>
        <Box sx={{ background: '#C7B2FF', marginRight: '22px', borderRadius: '4px', padding: '13px 25px 26px 25px', display: 'flex', flexDirection:'column', alignItems: 'center', gap: '16px' }}>
          <Image
            src={newSearch}
            alt='lol'
            width={92}
            height={92}
          />
          <Box sx={{ flexWrap: 'nowrap', textWrap: 'nowrap', color: '#000000'}}>
            <Typography variant="h6">Pronto para conhecer seu cliente?</Typography>
          </Box>
          <NewSearchButton fullWidth>
            <Typography variant='body1' sx={{marginBottom: '-2px'}}>Nova Pesquisa</Typography>
            <CloseIcon fontSize='small'/>
          </NewSearchButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header