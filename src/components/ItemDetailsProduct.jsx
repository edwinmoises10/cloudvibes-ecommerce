import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDBProductsDetails } from "../data/mockService";

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
      <div className="group relative w-250 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out border border-gray-100 overflow-hidden flex flex-row justify-center items-center">
        <div className="relative h-150 w-150 overflow-hidden">
          <img
            className="h-full w-100 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            src={productDetail.img}
            alt={productDetail.title}
          />
          <div className="absolute bottom-6 right-25 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">
            Stock: {productDetail.stock}
          </div>
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1 bg-linear-to-b from-white via-orange-50/30 to-white">
          <h1 className="text-lg font-bold text-gray-800 leading-tight line-clamp-2 min-h-12">
            {productDetail.title}
          </h1>

          <div className=" font-extrabold text-black">
            {productDetail.description}
          </div>

          <div className="text-2xl font-extrabold text-orange-600">
            ${productDetail.price}
          </div>

          <div className="mt-auto flex gap-2 pt-2">
            <Link to="#" className="flex-1">
              <button className="w-full py-2 px-3 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-orange-500/20 active:scale-95">
                Add +
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
