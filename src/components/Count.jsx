import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }else{
        console.log("Only 10 items");
        
    }
  };

  function handleMinus() {
    if (count === 1) return;
    setCount(count - 1);
  }

  return (
    <>
      <div>
        <div className=" flex gap-3 px-5 py-1 border-2 border-indigo-500 rounded-3xl  ">
          <button
            disabled={count === 1}
            onClick={handleMinus}
            className="group transition-colors  disabled:cursor-not-allowed "
          >
            {count > 1 ? (
              <svg className="w-3 h-3 group fill-sky-50">
                <use href="/sprite.svg#minus" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 group-disabled:fill-white fill-current">
                <use href="/sprite.svg#trash" />
              </svg>
            )}
          </button>

          <span className="text-2 font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
            {count}
          </span>

          <button onClick={handlePlus} disabled={count===10} className="group transition-colors  disabled:cursor-not-allowed ">
            <svg className=" w-3 h-3 group fill-sky-50 group-disabled:fill-red-300 ">
              <use href="/sprite.svg#plus" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
