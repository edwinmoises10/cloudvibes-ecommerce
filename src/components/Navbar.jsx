import CartWidget from "./CartWidget";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const baseTextStyle = "text-lg tracking-wide text-gray-600 transition-all";

  return (
    <>
    <span className="flex font-bold bg-black py-3 px-3 items-center text-white justify-center" >Black Friday begins on November 28th </span>
      <header className="relative flex py-3 px-6 items-center justify-between  bg-white">
        <nav className="flex items-center gap-8">
        
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 hover:text-black hover:scale-105 cursor-pointer transition-transform"
            >
              <span className="font-bold text-lg"> {isOpen? "Close":"Explore"}</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
        
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 z-50 border border-gray-100">
                <a
                  href="#"
                  className="block px-4 py-2 text-lg text-gray-600 hover:bg-gray-50 hover:text-black transition-colors">
                  Our Story</a>
                <a href="#"
                  className="block px-4 py-2 text-lg text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                >Support</a>
                <a href="#"
                  className="block px-4 py-2 text-lg text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                >FAQs</a>
              </div>
            )}
          </div>
      
          <ul className={`flex flex-row items-center gap-8 ${baseTextStyle}`}>
            <li className={`hover:text-black hover:scale-105 cursor-pointer transition-transform ${baseTextStyle} font-bold `}>
              <a href="#">Shop</a>
            </li>
            <li className={`hover:text-black hover:scale-105 cursor-pointer transition-transform ${baseTextStyle} text-black font-bold `}>
              <a href="#">Brands</a>
            </li>
            <li className={`hover:text-red-500 hover:scale-105 cursor-pointer transition-transform ${baseTextStyle} font-bold text-red-600 `}>
              <a href="#">Sale</a>
            </li>
          </ul>
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#">
            <img
              src="./src/assets/logoCloudVibes4.png"
              alt="CloudVibes Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* SearchBar + Cart */}
        <div className="flex flex-row items-center gap-4">
          <div className="relative w-full max-w-xs hidden md:block">
            {" "}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Products"
              className={`w-2xs rounded-full py-2 pl-10 pr-4 text-lg outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-200 placeholder-gray-400 transition-shadow ${baseTextStyle}`}
            />
          </div>

          <button className="pl-4 border-l border-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
            <CartWidget />
          </button>
        </div>
      </header>
    </>
  );
}
