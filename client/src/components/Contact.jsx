import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Input
} from '@chakra-ui/react'

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => setContactInfo({...contactInfo, [e.target.name]: e.target.value})


  return (
    <div className='contactContainer'>
      <form className='contactForm'>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input type='text' value={contactInfo.name} name="name" onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Correo</FormLabel>
          <Input type='email' value={contactInfo.email} name="email" onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Mensaje</FormLabel>
          <Textarea placeholder='Escriba su mensaje aqui' value={contactInfo.message} name='message' onChange={handleInputChange}/>
        </FormControl>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Contact