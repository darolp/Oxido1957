import InfoRow from './InfoRow'
import FeaturedProducts from './FeaturedProducts'
import Banner from './Banner'
import About from './About'
import Hero from './Hero'
import whatsapp from '../images/WhatsApp.png'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <Hero />
      <div className='whatsapp'>
        <Link target='_blank'>
          <img  src={whatsapp} />
        </Link>
      </div>
      <InfoRow />
      <FeaturedProducts />
      <Banner />
      <About />
    </>
  )
}

export default Home