import React from 'react'
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import { productService } from '../services/data';
import Loading from './Loading';

const ITEMS_PER_PAGE = 4;

function FeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);

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
    productService.getAll().then(response => setProductList(response.filter(item => item.featured)))
  }, []);

  return (
    <>
      <h2 className='featuredProductsTitle'>PRODUCTOS DESTACADOS</h2>

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

      <div className='FeaturedProducts'>
        {(productList.length === 0) ? <Loading /> : currentPageList.map(e => <ProductCard id={e.id} img={e.img} title={e.title} description={e.description} price={e.price} category={e.category} stock={e.stock} key={e.id} />)}
      </div>
    </>
  )
}

export default FeaturedProducts