import React from 'react'

function AddItemButton({addCart , size}) {
  return (
    <button
      className="productCard-buttons-addCart"
      onClick={addCart}
      disabled={!size}
    >
      {size ? "Agregar al carrito" : "Seleccionar talle"}
    </button>
  )
}

export default AddItemButton