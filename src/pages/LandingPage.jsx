import { Box } from '@chakra-ui/react'
import React from 'react'
import Logo from '../components/Logo'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'

const LandingPage = () => {
  return (
    <Box px={100} py={5} bg={'#f2f2f2;'}>
      <Header />
      <Hero />
    </Box>
  )
}

export default LandingPage