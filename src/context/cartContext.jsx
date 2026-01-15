import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });

const ContextProvider = cartContext.Provider;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

function addItemToCart(product, countSelected){
    const newCart = structuredClone(cart)
    newCart.push({...product, countSelected})
    setCart(newCart)
}



  return <ContextProvider value={{ cart, addItemToCart }}>{children}</ContextProvider>;
}

export default cartContext;
