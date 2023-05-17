import React, {useEffect, useState} from 'react';
import { productService } from '../../services/data';
import ListProductItem from './ListProductItem';

const ITEMS_PER_PAGE = 5;

function ListProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState('');
  const [refresh, setRefresh] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageList = productsFilter.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(productsFilter.length / ITEMS_PER_PAGE);

  useEffect(() => {
    productService.getAll().then(response => setAllProducts(response));
    setRefresh(false)
  }, [refresh]);

  useEffect(() => {
    setProductsFilter(allProducts);
  }, [allProducts]);

  const handleSearch = (e) => {
    const search = allProducts.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setProductsFilter(search);
  }

  return (
      <>
        <div className='listProductsTitle'>
          <h2>Lista de productos</h2>
        </div>
        <div className='listProductsSearch'>
          <input type={'search'} placeholder={'buscar productos por titulo'} onChange={handleSearch}/>
        </div>

        {productsFilter.length > ITEMS_PER_PAGE && (
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

        <div className='listProductsContainer'>
          {currentPageList && currentPageList.map(item => <ListProductItem key={item.id} setRefresh={setRefresh} product={item}/>)}
        </div>
      </>
    )
}

export default ListProducts