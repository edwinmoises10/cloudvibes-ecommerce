import { Link } from "react-router-dom";

export default function Item(props) {
  const { id, img, title, price, category, stock, brand, description, genre } = props;

  return (
  <div className="group relative w-72 bg-slate-900  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out border border-gray-100 overflow-hidden flex flex-col">
      
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
          src={img} 
          alt={title} 
        />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">
          Stock: {stock}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950">
        
        <h1 className="text-lg font-bold text-white leading-tight  line-clamp-2 min-h-12">
          {title} - <span className="text-cyan-400">{category}</span>

        </h1>


        {/* Precio destacado */}
        <div className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
          ${price}
        </div>

        <div className="mt-auto flex gap-2 pt-2">
            {/* Detalle  */}
          <Link to={`/details/${id}`} className="flex-1">
            <button className="w-full py-2 px-3 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Details
            </button>
          </Link>

          {/* ADD */}
          <Link to="/" className="flex-1">
            <button className="w-full py-2 px-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-orange-500/20 active:scale-95">
              Add +
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
