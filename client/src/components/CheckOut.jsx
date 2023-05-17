import React from 'react'
import { useParams } from 'react-router-dom'
function CheckOut() {
  return (
    <>
    <div className='checkOutContainer'>
      <h2 className='title'>Gracias por su compra!</h2>
      {/* <h2 className='title'>{id}</h2> */}
      <p>Lo vamos a estar contactando a la brevedad para informarle acerca del envio de sus productos</p>
    </div>
    </>
  )
}

export default CheckOut