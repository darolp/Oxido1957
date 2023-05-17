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
        <InfoCard icon={coins} title={'Envios a todo el pais'} text={'comprando 5 prendas o mas el envio es sin cargo'}/>
        <InfoCard icon={global} title={'Envios a todo el pais'} text={'comprando 5 prendas o mas el envio es sin cargo'}/>
        <InfoCard icon={percent} title={'Envios a todo el pais'} text={'comprando 5 prendas o mas el envio es sin cargo'}/>
        <InfoCard icon={shopping} title={'Envios a todo el pais'} text={'comprando 5 prendas o mas el envio es sin cargo'}/>
      </div>
    </>
  )
}

export default InfoRow