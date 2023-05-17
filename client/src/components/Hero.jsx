import React from 'react'
import { Box } from '@chakra-ui/react'


function Hero({slogan}) {
  return (
    <Box 
      bgImage="https://cdn.pixabay.com/photo/2018/08/29/03/57/man-3639100_960_720.jpg"
      w='100%' h='calc(100vh - 130px)' bgPosition="center" bgRepeat="no-repeat" bgSize='cover' >
      <div className='hero'>
        <h1> OXIDO <span>- Donde la pasión por la moto se combina con la moda -</span></h1>
      </div>
    </Box>
  )
}

export default Hero