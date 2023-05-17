import React from 'react'

function InfoCard(props) {
  const {icon, title, text} = props
  return (
    <>
    <div className='infoCard'>
      <div className='infoCardIcon'>
        <img src={icon} alt='icon'/>
      </div>
      <div className='infoCardTitle'>
        <h3>{title}</h3>
      </div>
      <div className='infoCardText'>
        <p>{text}</p>
      </div>
    </div>
      
    </>
  )
}

export default InfoCard