import { useState } from "react";

export default function Count(props) {
  const { stock , onItemsSelected} = props;

  const [count, setCount] = useState(1);


  if (stock === 0) {
    return (
      <div className="flex flex-row items-center gap-2 my-2">
        <svg className="w-7 h-7 fill-red-300">
          <use href="/sprite.svg#sad-face" />
        </svg>

        <span className="text-red-500 font-bold text-2xl">Out of Stock</span>
      </div>
    );
  }

  const handlePlus = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  function handleMinus() {
    if (stock && count > 1) {
      setCount(count - 1);
    }
  }



  return (
    <>
      <div>
        <button onClick={()=> onItemsSelected(count)} className="py-2 px-6 text-sm font-bold text-slate-900 bg-white rounded-lg hover:bg-cyan-50 hover:text-cyan-900 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95">
          Add to Cart
        </button>
      </div>

      <div className=" flex gap-3 px-5 py-1 border-2 border-indigo-500 rounded-3xl  ">
        <button
          disabled={count === 1}
          onClick={handleMinus}
          className="group transition-colors  disabled:cursor-not-allowed "
        >
          <svg className="w-3 h-3 group fill-sky-50">
            <use href="/sprite.svg#minus" />
          </svg>
        </button>

        <span className="text-2 font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
          {count}
        </span>

        <button
          onClick={handlePlus}
          disabled={count === stock}
          className="group transition-colors  disabled:cursor-not-allowed "
        >
          <svg className=" w-3 h-3 group fill-sky-50 group-disabled:fill-red-300 ">
            <use href="/sprite.svg#plus" />
          </svg>
        </button>
      </div>
    </>
  );
}
