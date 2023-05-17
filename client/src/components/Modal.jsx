import React from 'react'

function Modal({ buyerInfo, handleBuyerInfoChange, handleCompletePurchase, setShowModal, handleCheckEmail, validMail }) {
  return (
    <div className='modalContainer'>
      <div className='modalBox'>
        <h2>Completa tus datos para realizar la compra</h2>
        <form className='modalForm' onSubmit={handleCompletePurchase}>
          <label>
            Nombre:
          </label>
          <input type='text' className='modalInput' name='name' value={buyerInfo.name} onChange={handleBuyerInfoChange} required />
          <label>
            Teléfono:
          </label>
          <input type='tel' className='modalInput' name='phone' value={buyerInfo.phone} onChange={handleBuyerInfoChange} required />
          <label>
            Correo electrónico:
          </label>
          <input type='email' className='modalInput' name='email' value={buyerInfo.email} onChange={handleBuyerInfoChange} required />
          <label>
            Confirmar Correo:
          </label>
          <input type='email' className={validMail ? 'modalInput' : ` modalInput invalid`} name='email' onChange={handleCheckEmail} required />
          <label>
            Dirección:
          </label>
          <input type='text' className='modalInput' name='address' value={buyerInfo.address} onChange={handleBuyerInfoChange} required />
          <label>
            Codigo Postal:
          </label>
          <input type='text' className='modalInput' name='cp' value={buyerInfo.cp} onChange={handleBuyerInfoChange} required />
          <div className='modalButtonContainer'>
            <button className='modalButton-buy'>Completar compra</button>
            <button className='modalButton-back' onClick={() => setShowModal(false)}>Volver</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal