import React from 'react'
import addImg from '../../images/addImg.png'

function ModalEditProduct({ handleModal, handleEdit, handleRemoveImg, product, handleChangeProductInfo }) {

  return (
    <>
      <div className='modalEditContainer'>
        <div className='btnCloseModal'>
          <button onClick={handleModal}>X</button>
        </div>

        <form className='modalFormContainer' onSubmit={handleEdit}>
          <div className='imagesContainer'>
            <label className='img' style={{ backgroundImage: `url(${product?.img})` }} >
              <input type="file" name='maninImg' onChange={handleChangeProductInfo} multiple={false} />
            </label>
            <label className='img' style={product?.galery[0] ? { backgroundImage: `url(${product?.galery[0]})` } : { backgroundImage: `url(${addImg})` }}>
              <input type="file" name='galery0' onChange={handleChangeProductInfo} multiple={false} />
              {product?.galery[0] && <span id='0' onClick={handleRemoveImg}>X</span>}
            </label>
            <label className='img' style={product?.galery[1] ? { backgroundImage: `url(${product?.galery[1]})` } : { backgroundImage: `url(${addImg})` }}>
              <input type="file" name='galery1' onChange={handleChangeProductInfo} multiple={false} />
              {product?.galery[1] && <span id='1' onClick={handleRemoveImg}>X</span>}
            </label>
            <label className='img' style={product?.galery[2] ? { backgroundImage: `url(${product?.galery[2]})` } : { backgroundImage: `url(${addImg})` }}>
              <input type="file" name='galery2' onChange={handleChangeProductInfo} multiple={false} />
              {product?.galery[2] && <span id='2' onClick={handleRemoveImg}>X</span>}
            </label>
            <label className='img' style={product?.galery[3] ? { backgroundImage: `url(${product?.galery[3]})` } : { backgroundImage: `url(${addImg})` }}>
              <input type="file" name='galery3' onChange={handleChangeProductInfo} multiple={false} />
              {product?.galery[3] && <span id='3' onClick={handleRemoveImg}>X</span>}
            </label>
          </div>
          <label className='modalFormTitle'>
            Titulo
            <input type="text" name='title' placeholder="Agregar Titulo" value={product?.title} onChange={handleChangeProductInfo} required />
          </label>

          <label className='modalFormPrice'>
            Precio
            <input type="number" name='price' value={product?.price} onChange={handleChangeProductInfo} required />
          </label>

          <label className='modalFormArea'>
            Desciption
            <textarea name='description' placeholder='Agregar descripcion' value={product?.description} onChange={handleChangeProductInfo} required></textarea>
          </label>

          <label className='formStock modalFormStock'>
            Stock
            <div>
              <label>
                XS
                <input type="number" name='xs' onChange={handleChangeProductInfo} value={product?.stock.xs} />
              </label>
              <label>
                S
                <input type="number" name='s' onChange={handleChangeProductInfo} value={product?.stock.s} />
              </label>
              <label>
                M
                <input type="number" name='m' onChange={handleChangeProductInfo} value={product?.stock.m} />
              </label>
              <label>
                L
                <input type="number" name='l' onChange={handleChangeProductInfo} value={product?.stock.l} />
              </label>
              <label>
                XL
                <input type="number" name='xl' onChange={handleChangeProductInfo} value={product?.stock.xl} />
              </label>
            </div>
          </label>

          <label className='modalFormCategory'>
            categoria
            <select name='category' value={product?.category} onChange={handleChangeProductInfo} >
              <option disabled value={''}>seleccionar</option>
              <option value={'remera'}>remera</option>
              <option value={'buzo'}>buzo</option>
              <option value={'campera'}>campera</option>
              <option value={'pantalon'}>pantalon</option>
            </select>
          </label>

          <label className='modalFormFeatured'>
            Destacado?
            <input type={'checkbox'} name='featured' checked={product?.featured} onChange={handleChangeProductInfo} />
          </label>


          <div className='btnContainer modalFormButton'>
            <button className="formSubmit">Editar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ModalEditProduct