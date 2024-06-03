import InfoCard from '@/app/components/info-card'
import { HomeContext } from '@/app/context/home/home-context';
import { Box, Typography } from '@mui/material'
import React, { BaseSyntheticEvent, KeyboardEvent, useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import DraftAccent from './draft-accent';
import NotificationIndicator from '@/app/components/notification-indicator';

interface Research {
  name: string;
  id: number;
  status: string;
}
interface ResearchProps {
  research: Research
}

interface FormData {
  title: string
}

function ResearchCard({research}: ResearchProps) {
  const { data: homeData, setHomeData } = useContext(HomeContext);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
    e?.preventDefault();
    const newResearches = homeData?.researches.myresearches.map(r => { return r.id === research.id ? { id: research.id, name: data.title || '', status: 'Em Campo' } : r}) as Research[]
    setHomeData({
      ...homeData,
      researches: {
        ...homeData?.researches,
        myresearches: newResearches
      }
    })
  };

  function onChange(event: KeyboardEvent) {
    if(event.code === 'Enter') {
      
      const submitButton = document.getElementById(`researchButton${research.id}`);
      if(submitButton) {
        submitButton.click()
      }
    }
  }

  return (
    <InfoCard animated>
      <Box sx={{ margin: '22px 18px', height: '222px' }}>
        <Box id="cardBorder" sx={{ borderLeft: '2px solid', paddingLeft: '6px', position: 'relative' }}>
          {research.status !== 'Rascunho' &&
            <>
              <Box sx={{ position: 'absolute', top: '-14px', right: '-10px'}}>
                <NotificationIndicator color='#0AD2A5' size={8} />
              </Box>
              <Typography variant='body2'>{research.status}</Typography>
              <Typography variant='h6'>{research.name}</Typography>
            </>
          }
          {research.status === 'Rascunho' &&
            <form onSubmit={handleSubmit(onSubmit)} id={`researchForm${research.id}`}>
              <Box sx={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translate(-50%, 0px)' }}>
                <DraftAccent />
              </Box>
              <Typography variant='body2'>RASCUNHO</Typography>
              <input 
                autoFocus 
                placeholder='Pesquisa sem título'
                style={{ fontWeight: '700', fontSize: '18px', fontFamily: 'inherit', width: '100%', display: 'flex', height: '21px', outline: 'none' }}
                onKeyDown={(event) => onChange(event)}
                {...register("title", {required: true, maxLength: 80})}
              />
              <button type="submit" id={`researchButton${research.id}`} style={{display: 'none'}}></button>
            </form>
          }
        </Box>
      </Box>
    </InfoCard>
  )
}

export default ResearchCard