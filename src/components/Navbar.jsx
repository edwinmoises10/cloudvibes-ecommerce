import CarWidget from "./CarWidget";
import { Search } from "lucide-react";

export default function Navbar() {
  const baseTextStyle = "text-lg tracking-wide text-gray-600 transition-all";

  return (
    <>
      <header className="relative flex h-16 items-center justify-between px-6  bg-white ">
        <nav className="flex items-center">
          <ul className={`flex flex-row items-center gap-8 ${baseTextStyle}`}>
            <li className="hover:text-black hover:scale-105 cursor-pointer">
              <a href="#">Catalog</a>
            </li>
            <li className="hover:text-black hover:scale-105 cursor-pointer">
              <a href="#">Brands</a>
            </li>
            <li className="hover:text-black hover:scale-105 cursor-pointer">
              <a href="#">Deals</a>
            </li>
            <li className="hover:text-black hover:scale-105 cursor-pointer">
              <a href="#">Help</a>
            </li>
          </ul>
        </nav>
        {/* Logo  */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#">
            <img
              src="./src/assets/logoCloudVibes4.png"
              alt="CloudVibes Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>
        {/* SearchBar */}
        <div className="flex flex-row items-center gap-4">
          <div className="relative w-full max-w-xs">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ">
              <Search className=" w-4 h-4 text-gray-500" />
             
            </div>

            <input
              type="text"
              placeholder="Search Product"
              className={`w-full rounded-full py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-200 placeholder-gray-500 ${baseTextStyle}`}
            />
          </div>

          <button className="pl-4 border-l border-gray-200 cursor-pointer hover:opacity-80 transition-opacity">
            <CarWidget />
          </button>
        </div>
      </header>

      <main></main>
    </>
  );
}
