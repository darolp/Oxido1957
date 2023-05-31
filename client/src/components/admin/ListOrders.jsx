import React, { useEffect, useState } from 'react';
import { productService } from '../../services/data';
import ListOrdesItem from './ListOrdesItem';

function ListOrders() {
  const [ordersList, setOrdersList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const deleteOrder = (id) => {
    productService.deleteOrder(id);
    setRefresh(true)
  }

  const handleCheck = (id, state) => {
    const newState = state === 'Pendiente' ? 'enviada' : 'Pendiente';
    productService.updateStateOrders(id, newState);
    setRefresh(true);
  }

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    let filteredArray = [];

    if (filterValue === 'Pendiente') {
      filteredArray = ordersList.filter((item) => item.state === 'Pendiente');
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
    setRefresh(false);
  }, [refresh]);

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
            <option value="Pendiente">Pendiente</option>
            <option value="enviada">Enviada</option>
          </select>
        </div>
      </div>
      <div className="OrdersContainer">
        {filteredArray &&
          filteredArray.map((item, index) => (
            <ListOrdesItem key={index} order={item} handleCheck={handleCheck} deleteOrder={deleteOrder}></ListOrdesItem>
          ))}
      </div>
    </>
  );
}

export default ListOrders;