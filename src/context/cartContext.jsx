import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });

const ContextProvider = cartContext.Provider;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItemToCart(product, countSelected) {
    const checkProduct = cart.findIndex(e => e.id === product.id);
    const newCart = structuredClone(cart);

    if(checkProduct != -1){
      console.log("Existe Item");
      newCart[checkProduct].countSelected = countSelected
      setCart(newCart)
    }else{
      console.log("no existe ");
    
      newCart.push({...product, countSelected})
      setCart(newCart)
      
    }

  }

  function removeItem(productID) {
    const updateCart = cart.filter((e) => e.id !== productID);
    setCart(updateCart);
  }

  return (
    <ContextProvider value={{ cart, addItemToCart, removeItem }}>
      {children}
    </ContextProvider>
  );
}

export default cartContext;
