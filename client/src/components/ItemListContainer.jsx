import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import ItemList from './ItemList';
import { productService } from '../services/data';

const ITEMS_PER_PAGE = 8;

function ItemListContainer() {
  const { category } = useParams();
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageList = productList.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(productList.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (category) {
      setCurrentPage(1);
      productService.getAll().then(response => {
        const productsFilter = response.filter(e => e.category === category)
        setProductList(productsFilter);
      })
    } else {
      productService.getAll().then(response => setProductList(response))
    }
  }, [category]);

  return (
    <>
      <h1 className='title'>PRODUCTOS</h1>
      
      <div className='productsFilter'>
        <Link to={'/products'}>Todo </Link>
        <div>|</div>
        <Link to={'/products/remera'}>Remeras </Link>
        <div>|</div>
        <Link to={'/products/campera'}>Camperas </Link>
        <div>|</div>
        <Link to={'/products/campera'}>Camisas </Link>
        <div>|</div>
        <Link to={'/products/campera'}>Accesorios </Link>
        <div>|</div>
        <Link to={'/products/buzo'}>Buzos </Link>
      </div>

      {productList.length > ITEMS_PER_PAGE && (
        <div className='pagination'>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}

      <div>
        {(productList.length === 0) ? <Loading /> : <ItemList products={currentPageList} />}
      </div>

      
    </>
  )
}

export default ItemListContainer;