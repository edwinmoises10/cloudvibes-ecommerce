import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-gray-50 via-gray-100 to-red-100 p-4 text-center">
      
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-red-400 rounded-full opacity-20 animate-ping"></div>
        <div className="relative bg-red-100 p-6 rounded-full border-2 border-red-200 shadow-xl">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-red-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      <h1 className="text-9xl font-black text-gray-200 absolute select-none opacity-80 z-0">
        404
      </h1>

      <div className=" relative">
        <h4 className="text-red-600 text-3xl font-mono font-bold tracking-widest mb-2">
          SYSTEM_ERROR
        </h4>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Route Not Found
        </p>

        <Link to="/">
          <button className="group relative px-6 py-3 font-bold text-white transition-all duration-300 bg-gray-900 rounded-lg hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            <span className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return Home
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}