import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const contextData = useContext(cartContext);

  return (
    <>
      <div className=" p-2">
        <Link className="flex flex-row gap-2" to={"/cart"}>
          <svg className="w-7 h-7 fill-amber-400">
            <use href="/sprite.svg#cart" />
          </svg>
          <span className="text-xl text-black ">
            ({contextData.cart.length})
          </span>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
