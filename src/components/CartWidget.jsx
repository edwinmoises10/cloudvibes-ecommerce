import { useContext } from "react";
import cartContext from "../context/cartContext";

const CartWidget = () => {
  const contextData = useContext(cartContext);

  return (
    <>
      <div className="flex flex-row gap-4 items-center justify-center">
        <svg className="w-7 h-7 fill-black">
          <use href="/sprite.svg#cart" />
        </svg><span className="text-xl text-purple-800 " >({contextData.cart.length})</span>
      </div>
    </>
  );
};

export default CartWidget;
