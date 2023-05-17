import React from 'react'

function CartItem({id, img, title, price, amount, size, removeCartItem}) {
  const handleRemoveClick = () => {
    removeCartItem(id);
  };
  return (
    <>
      <div className='cartItemContainer'>
        <div className='cartItemImg'>
          <img src={img}/>          
        </div>
        <div className='cartItemText'>
          <h2>{title}</h2>
          <p>Precio: {price}</p>
          <p>Cantidad: {amount}</p>
          <p>Tamaño: {size.toUpperCase()}</p>
        </div>
        <div className='cartItemButtons'>
          <button onClick={handleRemoveClick}>X</button>
        </div>
      </div>
    </>
  )
}

export default CartItem