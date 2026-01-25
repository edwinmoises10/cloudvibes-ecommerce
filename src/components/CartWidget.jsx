import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItemInCar } = useContext(cartContext);

  return (
    <>
      <div >
        <Link className="flex flex-row gap-2" to={"/cart"}>
          <svg className=" w-7 h-7 fill-cyan-700 hover:fill-cyan-500 transition-colors">
            <use href="/sprite.svg#cart" />
          </svg>
          <span className="text-xl  text-black ">({totalItemInCar()})</span>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
