import { useContext } from "react";
import cartContext from "../context/cartContext";
import CheckoutCount from "./CheckoutCount";
import { Link, useNavigate } from "react-router-dom";
import { createBuyOrder } from "../data/firestore";
import Swal from "sweetalert2";
import Form from "./Form";

export default function Checkout() {
  const { cart, getTotal, getItemSubTotal, clearCart, clearCartBeforeBuy } =
    useContext(cartContext);

  const navigate = useNavigate(); // 2. Inicializar el hook
  const tdHead =
    "p-4 text-slate-300 text-center font-bold tracking-wider border-b border-slate-700 uppercase text-xs";
  const tdBody =
    "p-4 text-slate-400 font-mono text-center border-b border-slate-800";

function handleCheckout() {
  if (cart.length === 0) {
    Swal.fire({
      title: "Cart is Empty", // Corregido: 'Car' es auto, 'Cart' es carrito
      text: "You haven't added any items yet.",
      icon: "info",
      showDenyButton: true,
      showConfirmButton: false,
      denyButtonColor: "#28a745",
      denyButtonText: "Continue Shopping",
    }).then((result) => {
      if (result.isDenied) navigate("/");
    });
    return; }

  const buyOrder = {
    buyer: "Moises",
    items: cart,
    total: getTotal(),
    date: new Date(),
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  swalWithBootstrapButtons.fire({
    title: "Confirm Purchase",
    text: `Total amount: $${getTotal()}`, // Fraseo más profesional
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Buy Now",
    cancelButtonText: "Cancel", // Sin signos de exclamación (estándar UI)
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      createBuyOrder(buyOrder);
      clearCartBeforeBuy();
      console.log("Order placed successfully ✅");
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your items remain in the cart.", // Feedback más claro
        icon: "error",
      });
    }
  });
}

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-5">
      <div className="bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 rounded-2xl shadow-xl shadow-black/50 border border-slate-800 overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-slate-950/50">
            <tr>
              <td className={tdHead}>ID</td>
              <td className={tdHead}>IMG</td>
              <td className={tdHead}>Title</td>
              <td className={tdHead}>Price</td>
              <td className={tdHead}>Count</td>
              <td className="p-4 text-emerald-400 text-center font-bold border-b border-slate-700 text-xs uppercase tracking-wider">
                Total
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            {cart.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-white/5 transition-colors duration-200"
              >
                <td className={tdBody}>
                  <span className="text-xs text-white">ID:{item.id}</span>
                </td>

                {/* Corrección de centrado: Imagen */}
                <td className={tdBody}>
                  <div className="flex justify-center items-center">
                    {item.img ? (
                      <Link to={`/details/${item.id}`}>
                        <img
                          className="w-20 h-20 object-cover object-top rounded-lg shadow-lg border border-slate-700"
                          src={item.img}
                          alt={item.title}
                        />
                      </Link>
                    ) : (
                      "NO DATA"
                    )}
                  </div>
                </td>

                <td className={tdBody}>
                  <Link
                    to={`/details/${item.id}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item.title} - {item.category}
                  </Link>
                </td>

                <td className={`${tdBody} text-center`}>$ {item.price}</td>

                <td className={tdBody}>
                  <div className="flex justify-center items-center">
                    <CheckoutCount item={item} />
                  </div>
                </td>

                <td className="p-4 text-center font-mono font-bold text-emerald-400 border-b border-slate-800">
                  $ {getItemSubTotal(item)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {cart.length === 0 && (
          <div className="p-10 text-center text-slate-500">Cart Empty</div>
        )}
      </div>

      <div className="self-end w-full md:w-1/2 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 rounded-2xl shadow-xl border border-slate-800 p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <span className="text-slate-400 font-medium">Total Estimado</span>
          <span className="text-3xl font-bold text-white tracking-tight">
            $ {getTotal()}
          </span>
        </div>

        {<Form />}

        <div className="flex flex-row gap-2 justify-around items-center">
          {/* <button
            onClick={handleCheckout}
            className="bg-gray-500 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-purple-900/20 transition-all active:scale-95 "
          >
            <span>Finalizar Compra</span>
          </button> */}
          <div className="">
            <button onClick={() => clearCart()}>
              <svg className="w-5 h-5 group fill-gray-500">
                <use href="/sprite.svg#trash" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
