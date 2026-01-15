import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDBProductsDetails } from "../data/mockService";
import LoadingUI from "./LoadingUI";
import Count from "./Count";
import cartContext from "../context/cartContext";

export default function ItemDetailsProduct() {
  const { itemID } = useParams();
  const [productDetail, setProductDetails] = useState([]);
  const {addItemToCart} = useContext(cartContext)

  useEffect(() => {
    getDBProductsDetails(itemID)
      .then((e) => setProductDetails(e))
      .catch((err) => err);
  }, []);

  function onItemsSelected(value){
    console.log(`se agrego ${value} items al carrito  de ${productDetail.title}`)
    addItemToCart(productDetail, value)
  }



  return (
    <>
      {productDetail.length === 0 ? (
        <LoadingUI />
      ) : (
        <div className="flex justify-center items-center p-7">
          <div className="group relative w-200 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 rounded-2xl shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 ease-out border border-slate-800 overflow-hidden flex flex-row-reverse justify-center items-center ">
            <div className="relative w-80 h-full overflow-hidden shrink-0">
              <img
                className="h-full w-full object-cover object-top"
                src={productDetail.img}
                alt={productDetail.title}
              />

              <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-full border border-white/10">
                Stock: {productDetail.stock}
              </div>
            </div>

            <div className="w-400">
              <div className="p-6 flex flex-col gap-3 flex-1 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950">
                <h1 className="text-4xl font-bold text-white leading-tight line-clamp-2 min-h-12 tracking-wide">
                  {productDetail.title}
                </h1>

                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Category:{" "}
                  <span className="text-cyan-400">
                    {productDetail.category}
                  </span>
                </h2>

                <div className="text-sm font-medium text-slate-300 line-clamp-3">
                  {productDetail.description}
                </div>

                <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  ${productDetail.price}
                </div>

                <div className="mt-auto flex flex-row items-center gap-2 pt-2">
                  {<Count onItemsSelected={onItemsSelected} stock={productDetail.stock} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
