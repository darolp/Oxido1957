import React from 'react'
import { Link } from 'react-router-dom'
import medal from '../images/medal-line.svg'
function About() {
  return (
    <div className='about'>
      <img src={medal} alt='medal' />
      <div className='aboutText'>
        <h2>Al elegir Oxido, no solo estarás adquiriendo ropa de calidad, sino también formando parte de una comunidad de amantes de la moto que comparten la misma pasión y estilo de vida. Nuestra ropa es el complemento perfecto para <Link to={'/admin'}>vivir</Link> al máximo la experiencia de conducir en dos ruedas. ¡Únete a nosotros y siente la libertad en cada salida!</h2>
      </div>
    </div>
  )
}

export default About