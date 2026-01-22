import { useContext } from "react";
import cartContext from "../context/cartContext";
import CheckoutCount from "./CheckoutCount";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart } = useContext(cartContext);

  const tdHead = "p-3 text-gray-500 text-center font-semibold";
  const tdBody = "p-3 text-gray-500 text-left font-semibold font-mono";

  return (
    <>
      <div className="flex justify-center items-center p-5">
        <table className="border-collapse  w-80% shadow-sm rounded">
          <thead className="bg-gray-100">
            <tr className="">
              <td className={tdHead}>ID</td>
              <td className={tdHead}>IMG</td>
              <td className={tdHead}>Title</td>
              <td className={tdHead}>Price</td>
              <td className={tdHead}>Count</td>
              <td className="p-3 text-red-500 text-left font-semibold">
                Total
              </td>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className={tdHead}>ID:{item.id}</td>
                <td className="p-3">
                  {item.img ? (
                    <Link to={`/details/${item.id}`}><img
                      className="w-35 h-45 object-cover object-top rounded "
                      src={item.img}
                      alt={item.title}
                    /></Link>
                    
                  ) : (
                    "NO DATA"
                  )}
                </td>
                <td className={tdHead}>
                  <Link to={`/details/${item.id}`}>{item.title}</Link>
                </td>
                <td className={tdHead}>{item.price}</td>
                <td className={tdHead}>{<CheckoutCount item={item} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
