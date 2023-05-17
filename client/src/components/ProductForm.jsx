import React from 'react'

function ProductForm({handleSize, size, stock, setAmount, amount}) {
  return (
    <div>
      <select
        className="productCard-buttons-select"
        required
        onChange={(e) => handleSize(e.target.value)}
        value={size}
      >
        <option disabled value={""}>
          Talles
        </option>
        <option value={"xs"} disabled={stock.xs === 0 ? true : false} className="stock">
          XS ({stock.xs})
        </option>
        <option value={"s"} disabled={stock.s === 0 ? true : false}>
          S ({stock.s})
        </option>
        <option value={"m"} disabled={stock.m === 0 ? true : false}>
          M ({stock.m})
        </option>
        <option value={"l"} disabled={stock.l === 0 ? true : false}>
          L ({stock.l})
        </option>
        <option value={"xl"} disabled={stock.xl === 0 ? true : false}>
          XL ({stock.xl})
        </option>
      </select>
      <div className="productCard-buttons-amount">
        <label>Cantidad: </label>
        <button onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}>
          -
        </button>
        <input type="number" value={amount} readOnly />
        <button
          onClick={() =>
            setAmount((state) => (state < stock[size] ? state + 1 : stock[size]))
          }
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductForm