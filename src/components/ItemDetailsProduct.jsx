import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDBProductsDetails } from "../data/mockService";
import LoadingUI from "./LoadingUI";
import Count from "./Count";

export default function ItemDetailsProduct() {
  const { itemID } = useParams();

  const [productDetail, setProductDetails] = useState([]);

  useEffect(() => {
    getDBProductsDetails(itemID)
      .then((e) => setProductDetails(e))
      .catch((err) => err);
  }, []);

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
                {/* Títulos: Blanco para máximo contraste */}
                <h1 className="text-4xl font-bold text-white leading-tight line-clamp-2 min-h-12 tracking-wide">
                  {productDetail.title}
                </h1>

                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Category:{" "}
                  <span className="text-cyan-400">
                    {productDetail.category}
                  </span>
                </h2>

                {/* Descripción: Gris claro (Slate-300) */}
                <div className="text-sm font-medium text-slate-300 line-clamp-3">
                  {productDetail.description}
                </div>

                <div className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  ${productDetail.price}
                </div>

                <div className="mt-auto flex gap-2 pt-2">
                  <Link to="#">
                    <button className="py-2 px-6 text-sm font-bold text-slate-900 bg-white rounded-lg hover:bg-cyan-50 hover:text-cyan-900 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95">
                      Add to Cart
                    </button>
                  </Link>

                  <Link to="#">
                    {<Count/>}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
