import InfoRow from './InfoRow'
import FeaturedProducts from './FeaturedProducts'
import Banner from './Banner'
import About from './About'
import Hero from './Hero'

function Home() {

  return (
    <>
      <Hero  />
      <InfoRow />
      <FeaturedProducts/> 
      <Banner />
      <About />
    </>
  )
}

export default Home