import CartWidget from "./CartWidget";
import { useState } from "react";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const baseTextStyle = "text-lg tracking-wide text-gray-600 transition-all";
  const genreStyle =
    "block px-4 py-2 text-lg text-gray-600 hover:bg-gray-50 hover:text-black transition-colors";

  return (
    <>
      <span className="flex font-bold bg-black py-3 px-3 items-center text-white justify-center">
        Video Game Store{" "}
      </span>
      <header className="relative flex py-3 px-6 items-center justify-between  bg-white">
        <nav className="flex items-center gap-8">
          <div className="relative">
            {isOpen && (
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              ></div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 hover:text-black hover:scale-105 cursor-pointer transition-transform"
            >
              <span className="font-bold text-lg">
                {" "}
                {isOpen ? "Close" : "Genre"}
              </span>
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
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Action-Adventure"
                  className={genreStyle}
                >
                  Action-Adventure
                </NavLink>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Shooter"
                  className={genreStyle}
                >
                  Shooter
                </NavLink>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/RPG"
                  className={genreStyle}
                >
                  RPG
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Horror"
                  className={genreStyle}
                >
                  Horror
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Fighting"
                  className={genreStyle}
                >
                  Fighting
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Sports"
                  className={genreStyle}
                >
                  Sports
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Racing"
                  className={genreStyle}
                >
                  Racing
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Simulation"
                  className={genreStyle}
                >
                  Simulation
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Platformer"
                  className={genreStyle}
                >
                  Platformer
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Roguelike"
                  className={genreStyle}
                >
                  Roguelike
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Survival"
                  className={genreStyle}
                >
                  Survival
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Strategy"
                  className={genreStyle}
                >
                  Strategy
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/JRPG"
                  className={genreStyle}
                >
                  JRPG
                </NavLink>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/genre/Adventure"
                  className={genreStyle}
                >
                  Adventure
                </NavLink>
              </div>
            )}
          </div>

          <ul className={`flex flex-row items-center gap-8 ${baseTextStyle}`}>
            <li
              className={`hover:text-black hover:scale-105 cursor-pointer transition-transform ${baseTextStyle} font-bold `}
            >
              <NavLink to="/category/PS5">PS5</NavLink>
            </li>
            <li
              className={`hover:text-black hover:scale-105 cursor-pointer transition-transform ${baseTextStyle} text-black font-bold `}
            >
              <NavLink to="/category/Xbox">Xbox</NavLink>
            </li>
            <li
              className={`hover:text-black hover:scale-105 cursor-pointer transition-transform ${baseTextStyle} text-black font-bold `}
            >
              <NavLink to="/category/PC">PC</NavLink>
            </li>
            <li
              className={`hover:text-red-500 hover:scale-105 cursor-pointer transition-transform ${baseTextStyle} font-bold text-red-600 `}
            >
              <NavLink to="/category/Multiplatform">Multiplatform</NavLink>
            </li>
          </ul>
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavLink to="/">
          <h1 className="text-4xl">MOCHETE STORE</h1>
            {/* <img
              src="../src/assets/logoCloudVibes4.png"
              alt="CloudVibes Logo"
              className="h-12 w-auto"
            /> */}
          </NavLink>
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
