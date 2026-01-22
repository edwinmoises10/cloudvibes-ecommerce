import { useContext } from "react";
import cartContext from "../context/cartContext";

export default function CheckoutCount(props) {
  const { item } = props;

  const { addItemToCart, removeItem } = useContext(cartContext);

  const handlePlus = () => {
    if (item.countSelected < item.stock) {
      const newValue = item.countSelected + 1;
      addItemToCart(item, newValue);
    }
  };

  function handleMinus() {
    if (item.countSelected > 1) {
      const newValue = item.countSelected - 1;
      addItemToCart(item, newValue);
    }
  }

  return (
    <>
<div className="flex items-center justify-center gap-2 px-2 py-1 border-2 border-indigo-500 rounded-3xl w-fit">        {item.countSelected === 1 ? (
          <button onClick={() => removeItem(item.id)}>
            <svg className="w-3 h-3 group fill-white">
              <use href="/sprite.svg#trash" />
            </svg>
          </button>
        ) : (
          <button
            onClick={handleMinus}
            className="group transition-colors  disabled:cursor-not-allowed "
          >
            <svg className="w-3 h-3 group fill-white">
              <use href="/sprite.svg#minus" />
            </svg>
          </button>
        )}

        <span className="text-2 font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
          {item.countSelected}
        </span>

        <button
          onClick={handlePlus}
          disabled={item.countSelected === item.stock}
          className="group transition-colors  disabled:cursor-not-allowed "
        >
          <svg className=" w-3 h-3 group fill-white group-disabled:fill-red-300 ">
            <use href="/sprite.svg#plus" />
          </svg>
        </button>
      </div>
    </>
  );
}
