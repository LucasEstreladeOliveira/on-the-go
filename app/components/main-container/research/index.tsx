import { Box, Grid, Paper, PaperProps, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ArrowBackIosNew, ArrowForwardIos, Height } from '@mui/icons-material';
import Carousel from 'react-elastic-carousel';
import SliderPagination from './slider-pagination';

import { styled } from '@mui/material'
import { GridProps } from '@mui/material/Grid'
import ResearchCard from './research-card';
import { HomeContext } from '@/app/context/home/home-context';

const CustomSliderWrapper = styled(Grid)<GridProps>(({theme}) => ({
  '& .rec-carousel': {
    alignItems: 'center',
    height: '310px !important'
  },
  '& .rec-slider-container': {
    height: '100%',
  },
  '& .rec-item-wrapper': {
    overflow: 'unset',
  },
  '& .rec-swipable': {
    alignItems: 'flex-end',
  },
  '& .rec-slider': {
    height: '100%',
  },
}))

const CustomArrow = styled(Paper)<PaperProps>(({theme}) => ({
  height: '46px', 
  width: '46px', 
  background: '#000000', 
  color: '#FFFFFF', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  flexShrink: '0',
  cursor: 'pointer'
}))

function ResearchSlide() {
  const { data } = useContext(HomeContext);

  const researches = data?.researches.myresearches;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 4 },
  ];

  return (
    <Box>
      <Box sx={{ marginBottom: '28px', marginTop: '50px' }}>
        <Typography variant='h4'>Minhas Pesquisas</Typography>
      </Box>
      <CustomSliderWrapper container sx={{ position: 'relative', marginLeft: '-60px' }}>
        <Carousel
          itemPadding={[0, 10, 0, 10]}
          isRTL={false}
          breakPoints={breakPoints}
          renderPagination={({ pages, activePage, onClick }) => <SliderPagination pages={pages} activePage={activePage} />}
          renderArrow={({ type, onClick }) => (
            <CustomArrow
              onClick={onClick}
              elevation={0}>
              {type === 'PREV' ? <ArrowBackIosNew /> : <ArrowForwardIos />}
            </CustomArrow>)}
        >
          {researches?.map(research => (
            <Grid item key={research.id} sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
              <ResearchCard research={research} /> 
            </Grid>
          ))}
        </Carousel>
      </CustomSliderWrapper>
    </Box>
  )
}

export default ResearchSlide