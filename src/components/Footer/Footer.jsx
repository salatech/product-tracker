import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
const Footer = () => {
  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',

    flex: 1,
    gap: 8,
    textAlign: 'left',
    color: 'black',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
  
    }}
    >

      <StackColumn>
      <Typography 
        variant='caption'
        component='p'
        sx={{
          fontWeight:'700',
          
        
        }} 
        >
        Home
        </Typography>
        <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
         About us
        </Typography>
        <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
        Track
        </Typography>
      </StackColumn>


      <StackColumn>
      <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
       Services
        </Typography>
        <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
       Pricing
        </Typography>
        <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
       How it works
        </Typography>
      </StackColumn>
      <StackColumn>
      <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
         Contact Us
        </Typography>
        <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
        Testimonials
        </Typography>
        <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
       Mission
        </Typography>
      </StackColumn>
      <StackColumn>
      <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
         Vision
        </Typography>
        <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
        Media
        </Typography>
        <Typography 
        variant='caption'
        component='p' 
        sx={{
          fontWeight:'700',
          
        }} 
        >
      Values
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer