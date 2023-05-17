import React from 'react'

function ListOrdersItemProductInfo({ product }) {
  const { title, quantity, size } = product
  return (
    <div className='orderItemProduct'>
      <div className='orderItemProductTitle'>
        <h2> {title} </h2>
      </div>
      <div className='orderItemProductInfo'>
        <p>Cantidad: {quantity}</p>
        <p>Talle: {size.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default ListOrdersItemProductInfo