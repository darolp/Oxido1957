import React from 'react'
import ListOrdersItemProductInfo from './ListOrdersItemProductInfo';
import trash from '../../images/delete-bin-5-line.svg'
function ListOrdesItem({ order, deleteOrder, handleCheck }) {
  const { buyer, items, id, timeStamp, total, state } = order;
  const { name, phone, email, address, cp } = buyer;

  return (
    <div className='orderItem'>
      <div className='orderItemId'>
        <h2>{id}</h2>
      </div>
      <div className='orderItemBuyerInfo'>
        <div>
          <p>Nombre:</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Telefono:</p>
          <p>{phone}</p>
        </div>
        <div>
          <p>Direccion:</p>
          <p>{address}</p>
          <p>{cp} - CP</p>
        </div>
        <div>
          <p>Correo:</p>
          <p>{email}</p>
        </div>
      </div>
      <div className='OrderItemProductsInfo'>
        {items.map((item, index) => <ListOrdersItemProductInfo key={index} product={item} />)}
      </div>
      <div className='orderItemButtons'>
        <div className='trash' onClick={() => deleteOrder(id)}><img src={trash} alt='basura' /></div>
        <div className='date'>{timeStamp}</div>
        <div className='date'>${total}</div>
        <div className={state === 'enviada' ?  'check checked' : 'check'}>
          <input type='checkbox' id={id} className='checkOrder' onClick={() => handleCheck(id, state)}/>
          <label htmlFor={id} className='customCheck' ></label>
        </div>
      </div>
    </div>
  )
}

export default ListOrdesItem