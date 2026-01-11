import { Link } from "react-router-dom";

export default function Item(props) {
  const { id, img, title, price, category, stock, brand, description, genre } = props;

  return (
  <div className="group relative w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out border border-gray-100 overflow-hidden flex flex-col">
      
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

      <div className="p-5 flex flex-col gap-3 flex-1 bg-linear-to-b from-white via-orange-50/30 to-white">
        
        <h1 className="text-lg font-bold text-gray-800 leading-tight line-clamp-2 min-h-12">
          {title}
        </h1>

        {/* Precio destacado */}
        <div className="text-2xl font-extrabold text-orange-600">
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
            <button className="w-full py-2 px-3 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-orange-500/20 active:scale-95">
              Add +
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
