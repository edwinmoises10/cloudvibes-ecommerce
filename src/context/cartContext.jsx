import { createContext, useState } from "react";
import Swal from "sweetalert2";

const cartContext = createContext({ cart: [] });

const ContextProvider = cartContext.Provider;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const confirmButton = () => {
    Swal.fire({
      title: "Empty Cart?",
      text: "This will remove all items from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Yes, empty it',
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);

        Swal.fire({
          title: "Deleted!",
          text: "Your Cart is empty",
          icon: "success",
        });
      }
    });
  };

  function addItemToCart(product, countSelected) {
    const checkProduct = cart.findIndex((e) => e.id === product.id);
    const newCart = structuredClone(cart);

    if (checkProduct !== -1) {
      console.log("Existe Item");
      newCart[checkProduct].countSelected = countSelected;
      setCart(newCart);
    } else {
      console.log("no existe ");

      newCart.push({ ...product, countSelected });
      setCart(newCart);
    }
  }

  function removeItem(productID) {
    const updateCart = cart.filter((e) => e.id !== productID);
    setCart(updateCart);
  }

  function getItemSubTotal(item) {
    let totalItem = item.price * item.countSelected;
    let totalFixed = totalItem.toFixed(2);
    return totalFixed;
  }

  function getTotal() {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.countSelected;
    }, 0);

    return total.toFixed(2);
  }

  function clearCart() {
    if (cart.length !== 0) {
      confirmButton();
    } else {
      Swal.fire("Your Cart is empty");
    }
  }

  function totalItemInCar() {
    console.log(cart.countSelected);

    const itemsInCar = cart.reduce((acc, item) => {
      return acc + item.countSelected;
    }, 0);
    return itemsInCar;
  }

  return (
    <ContextProvider
      value={{
        cart,
        addItemToCart,
        removeItem,
        getItemSubTotal,
        getTotal,
        clearCart,
        totalItemInCar,
      }}
    >
      {children}
    </ContextProvider>
  );
}

export default cartContext;
