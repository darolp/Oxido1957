import { createContext, useState, useEffect } from "react";

const context = createContext({});

const ContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [totalItems, setTotalItems] = useState(0);

  const updateCartList = (value) => {
    setCartList(value);
  };

  const removeCartItem = (itemId) => {
    const newcartList = cartList.filter((item) => item.id !== itemId);
    setCartList(newcartList);
  };

  const cleanCart = () => {
    setCartList([]);
  };


  useEffect(() => {
    let newTotal = 0;
    cartList.forEach((item) => {
      newTotal += item.amount;
    });
    setTotalItems(newTotal);
  }, [cartList]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);
  
  return (
    <context.Provider
      value={{ cartList, updateCartList, removeCartItem, cleanCart, totalItems }}
    >
      {children}
    </context.Provider>
  );
};

export { ContextProvider, context };
