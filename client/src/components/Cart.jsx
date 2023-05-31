import React, { useContext, useEffect, useState } from 'react'
import { context } from '../context/Context';
import { productService } from '../services/data';
import CartItem from './CartItem';
import Modal from './Modal';
import axios from 'axios';
function Cart() {

  const { cartList, removeCartItem, cleanCart, totalItems } = useContext(context);

  const [total, setTotal] = useState(0);

  const [envioGratis, setEnvioGratis] = useState();

  const [productList, setProductList] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    cp: ''
  });

  const [validMail, setValidMail] = useState(true);

  useEffect(() => {
    setEnvioGratis(total >= 20000);
  }, [total])

  const handleCheckEmail = (e) => setValidMail(e.target.value === buyerInfo.email);

  useEffect(() => {
    productService.getAll().then(resp => setProductList(resp))
  }, []);

  const handlePay = () => {
    setShowModal(true);
  }

  const handleBuyerInfoChange = (event) => {
    setBuyerInfo({
      ...buyerInfo,
      [event.target.name]: event.target.value
    });
  }

  const handleCompletePurchase = async (e) => {
    e.preventDefault()
    if (!validMail) {
      alert('Los correos electrónicos ingresados no coinciden. Por favor, inténtelo de nuevo.');
      return;
    }

    const purchaseData = {
      buyer: {
        name: buyerInfo.name,
        phone: buyerInfo.phone,
        email: buyerInfo.email,
        address: buyerInfo.address,
        cp: buyerInfo.cp
      },
      items: cartList.map(item => ({ id: item.idProducto, unit_price: item.price, title: item.title, size: item.size, quantity: item.amount, currency_id: "ARS" })),
      timeStamp: new Date().toLocaleString('es-AR', { timeZone: 'UTC', year: "numeric", month: "numeric", day: "numeric" }),
      state: "Pendiente",
      total: total
    };

    //MANEJAR STOCK
    cartList.forEach((elem) => {
      const product = productList.find((item) => item.id === elem.idProducto)
      const newAmount = product.stock[elem.size] - elem.amount;
      productService.updeteStock(elem.idProducto, elem.size, newAmount)
    })

    const order = await productService.newOrder(purchaseData);
    axios.post('https://oxido1957-he5g.vercel.app/payment', purchaseData.items).then((res) => window.location.href = res.data.response.body.init_point)
    cleanCart();
  }


  useEffect(() => {
    let newTotal = 0;
    cartList.forEach((item) => {
      newTotal += item.price * item.amount;
    });
    setTotal(newTotal);
  }, [cartList]);

  return (
    <>
      <div className='cartContainer'>
        {cartList.length > 0
          ? cartList.map(e => <CartItem key={e.id} id={e.id} img={e.img} amount={e.amount} size={e.size} title={e.title} price={e.price} removeCartItem={removeCartItem} />)
          : 'Aun no agregado ningun producto al carrito'}
        <div className='cartInfo'>
          <p>Total a pagar: ${total}</p>
          <p>Cantidad de productos: {totalItems}</p>
          <p style={{ color: envioGratis ? 'green' : 'red' }} className='envioGratis' > {envioGratis ? 'Tu compra supera los $20.000. El envio es GRATIS!!' : 'Tu compra no supera los $20.000. El precio del envio lo podes consultar por nuestro whatsapp'}</p>
        </div>
        <button disabled={cartList.length === 0} className='cartBtn' onClick={handlePay}>Pagar</button>
      </div >

      {showModal && <Modal setShowModal={setShowModal} handleCompletePurchase={handleCompletePurchase} handleBuyerInfoChange={handleBuyerInfoChange} buyerInfo={buyerInfo} handleCheckEmail={handleCheckEmail} validMail={validMail} />
      }

    </>
  )
}

export default Cart