import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productService } from '../services/data'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState({});

  useEffect(() => {
    productService.get(id).then(response => setProduct(response))
  }, [id]);

  return (
    <>
      <div className='itemDetailContainer'>
        {!product ? <h2 className='title'>PRODUCTO NO ENCONTRADO</h2> :  <ItemDetail id={product.id} img={product.img} title={product.title} description={product.description} price={product.price} stock={product.stock} galery={product.galery} />}
      </div>
    </>
  )
}

export default ItemDetailContainer