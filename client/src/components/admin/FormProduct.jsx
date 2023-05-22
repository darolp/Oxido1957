import React from 'react'


function FormProduct({ handleSubmit, handleProductInfoChange, newProduct }) {
  const handleFormSubmit = (event) =>{
    event.preventDefault();
    handleSubmit(event);
    event.target.reset();
  }
  return (
    <>
      <form className='formContainer' onSubmit={handleFormSubmit}>
        <label>
          Imagen princial
          <input type="file" name='maninImg' multiple={false} onChange={handleProductInfoChange} />
        </label>
        <label>
          Galeria
          <input type="file" name='galery' multiple={true} onChange={handleProductInfoChange} />
        </label>
        <label>
          Titulo
          <input type="text" name='title' placeholder="Agregar Titulo" value={newProduct.title} onChange={handleProductInfoChange} required />
        </label>

        <label>
          Precio
          <input type="number" name='price' value={newProduct.price} onChange={handleProductInfoChange} required />
        </label>

        <label >
          Desciption
          <textarea name='description' placeholder='Agregar descripcion' value={newProduct.description} onChange={handleProductInfoChange} required></textarea>
        </label>

        <label className='formStock'>
          Stock
          <div>
            <label>
              XS
              <input type="number" name='xs' value={newProduct.stock.xs} onChange={handleProductInfoChange} />
            </label>
            <label>
              S
              <input type="number" name='s' value={newProduct.stock.s} onChange={handleProductInfoChange} />
            </label>
            <label>
              M
              <input type="number" name='m' value={newProduct.stock.m} onChange={handleProductInfoChange} />
            </label>
            <label>
              L
              <input type="number" name='l' value={newProduct.stock.l} onChange={handleProductInfoChange} />
            </label>
            <label>
              XL
              <input type="number" name='xl' value={newProduct.stock.xl} onChange={handleProductInfoChange} />
            </label>
          </div>
        </label>

        <label>
          categoria
          <select name='category' value={newProduct.category} required onChange={handleProductInfoChange}>
            <option disabled value={''}>seleccionar</option>
            <option value={'remera'}>remera</option>
            <option value={'buzo'}>buzo</option>
            <option value={'campera'}>campera</option>
            <option value={'pantalon'}>pantalon</option>
            <option value={'camisas'}>camisas</option>
            <option value={'accesorios'}>accesorios</option>
          </select>
        </label>

        <label>
          Destacado?
          <input type={'checkbox'} name='featured' onChange={handleProductInfoChange} />
        </label>


        <div className='btnContainer'>
          <button className="formSubmit">Agregar</button>
        </div>
      </form>
    </>
  )
}

export default FormProduct