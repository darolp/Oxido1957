import React from 'react'
import InfoCard from './InfoCard'
import coins from '../images/coins-line.svg'
import global from '../images/global-line.svg'
import percent from '../images/percent-line.svg'
import shopping from '../images/shopping-bag-fill.svg'

function InfoRow() {
  return (
    <>
      <div className='InfoRow'>
        <InfoCard icon={coins} title={'Paga con comodidad'} text={'Acpetamos varios medios de pago!'}/>
        <InfoCard icon={global} title={'Envios a todo el pais'} text={'Los envios son sin cargo a partir de los $20000'}/>
        <InfoCard icon={percent} title={'Encontra el mejor precio'} text={'En nuestra tienda encontraras la mejor calidad al mejor precio.'}/>
        <InfoCard icon={shopping} title={'Productos de la mejor calidad'} text={'Descubre nuestra amplia selección de productos de la mejor calidad'}/>
      </div>
    </>
  )
}

export default InfoRow