import React, { useEffect, useState } from 'react';
import { productService } from '../../services/data';
import ListOrdesItem from './ListOrdesItem';

function ListOrders() {
  const [ordersList, setOrdersList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    let filteredArray = [];

    if (filterValue === 'pendiente') {
      filteredArray = ordersList.filter((item) => item.state === 'pendiente');
    } else if (filterValue === 'enviada') {
      filteredArray = ordersList.filter((item) => item.state === 'enviada');
    } else {
      filteredArray = ordersList;
    }

    setFilteredArray(filteredArray);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    productService.getAllOrders().then((resp) => setOrdersList(resp));
  }, []);

  useEffect(() => {
    const filtered = ordersList.filter((item) => item.buyer.phone.includes(searchTerm));
    setFilteredArray(filtered);
  }, [ordersList, searchTerm]);

  return (
    <>
      <div className="ordersFilter">
        <div className="ordesSearch">
          <input
            type="text"
            placeholder="buscar telefono"
            value={searchTerm}
            onChange={handleSearch}
          ></input>
        </div>
        <div className="orderFilter">
          <span>Filtrar por: </span>
          <select defaultValue="" onChange={handleFilter}>
            <option value="">Seleccionar</option>
            <option value="pendiente">Pendiente</option>
            <option value="enviada">Enviada</option>
          </select>
        </div>
      </div>
      <div className="OrdersContainer">
        {filteredArray &&
          filteredArray.map((item, index) => (
            <ListOrdesItem key={index} order={item}></ListOrdesItem>
          ))}
      </div>
    </>
  );
}

export default ListOrders;