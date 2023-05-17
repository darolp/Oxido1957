import { useState, useContext, useEffect } from "react";
import { context } from "../context/Context";
import AddItemButton from "./AddItemButton";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({ id, img, title, description, price, stock, galery }) {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("");
  const [showImg, setShowImg] = useState('');
  const { updateCartList, cartList } = useContext(context);


  useEffect(() => {
    setShowImg(img)
  }, [img]);

  const notify = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const handleSize = (size) => {
    setSize(size);
    setAmount(1);
  }

  const addCart = () => {
    // Busco si el producto existe en el cart
    const productInCart = cartList.find(
      (elem) => elem.idProducto === id && elem.size === size
    );

    // genero un nuevo amount en el caso de que haya y se pueda que incrementar
    let newAmount;
    if (productInCart && productInCart.amount + amount <= stock[size]) {
      newAmount = productInCart.amount + amount;
    }

    // Genero o actualizo el item
    const itemToAdd = {
      id: productInCart?.id || Math.random() * 10000,
      idProducto: id,
      img: img,
      amount: newAmount || amount,
      size: size,
      title: title,
      price: price,
    };

    // Si el item existe en el cart, mapeo el cart y actualizo el amount de ese item
    // si no, agrego el item al cart
    updateCartList(
      productInCart
        ? cartList.map((elem) => {
          if (elem.id === productInCart.id) {
            return itemToAdd;
          }
          return elem;
        })
        : [...cartList, itemToAdd]
    );

    //una vez agregado o actualizado el item se reincian los estados
    notify("se agregó correctamente al carrito")
    resetInputs()
  };

  const resetInputs = () => {
    setAmount(1)
    setSize("")
  }
  return (
    <>
      <div className='itemDetailImagesContainer'>
        <div className="itemDetailImgMain">
          <img alt='product' src={showImg} />
        </div>
        <div className="itemDetailGalery">
          <div onClick={() => setShowImg(img)}>
            <img alt="product" src={img} />
          </div>
          {
            galery && galery.map((item, index) => <div key={index} onClick={() => setShowImg(galery[index])}> <img alt="product" src={galery[index]}/> </div>)
          }
        </div>
      </div>
      <div className='itemDetailTextContainer'>
        <div className='itemDetailTextTitle'>
          <h2 className='title'>{title}</h2>
        </div>
        <div className='itemDetailTextInfo'>
          <div>{description}</div>
          <div>Precio: ${price}</div>
        </div>
        <div className="itemDetail-buttons">
          <ItemQuantitySelector handleSize={handleSize} size={size} stock={stock} setAmount={setAmount} amount={amount} />
        </div>
        <div className='itemDetailTextButtons'>
          <AddItemButton addCart={addCart} size={size} />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default ItemDetail