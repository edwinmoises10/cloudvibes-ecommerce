import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react"; // Añadidos iconos de UI
import CartWidget from "./CartWidget";
import logo from "../assets/logoCloudVibesGame.png";

// Constantes de datos para evitar código repetitivo y facilitar mantenimiento
const GENRES = [
  "Action-Adventure", "Shooter", "RPG", "Horror", "Fighting", 
  "Sports", "Racing", "Simulation", "Platformer", "Roguelike", 
  "Survival", "Strategy", "JRPG", "Adventure"
];

const CATEGORIES = [
  { name: "PS5", path: "/category/PS5", color: "text-gray-600" },
  { name: "Xbox", path: "/category/Xbox", color: "text-black" },
  { name: "PC", path: "/category/PC", color: "text-black" },
  { name: "Multiplatform", path: "/category/Multiplatform", color: "text-red-600" },
];

export default function Navbar() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Estilos base reutilizables
  const baseTextStyle = "text-lg tracking-wide transition-all font-bold";
  const dropdownItemStyle = "block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors";

  return (
    <>
      {/* Top Banner */}
      <div className="flex font-bold bg-black py-2 px-3 items-center text-white justify-center text-sm md:text-base">
        Video Game Store
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="flex py-3 px-4 md:px-6 items-center justify-between h-20">
          
          {/* --- LEFT SECTION: Mobile Trigger & Desktop Genre --- */}
          <div className="flex items-center gap-4">
            
            {/* Mobile Hamburger Button (Visible < lg) */}
            <button 
              className="lg:hidden p-1 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Desktop Genre Dropdown (Visible >= lg) */}
            <div className="relative hidden lg:block">
              {isGenreOpen && (
                <div className="fixed inset-0 z-10" onClick={() => setIsGenreOpen(false)} />
              )}
              
              <button
                onClick={() => setIsGenreOpen(!isGenreOpen)}
                className="flex items-center gap-1 hover:text-black hover:scale-105 cursor-pointer transition-transform text-gray-600"
              >
                <span className="font-bold text-lg">
                  {isGenreOpen ? "Close" : "Genre"}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isGenreOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Desktop Dropdown Menu */}
              {isGenreOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 z-50 border border-gray-100 max-h-[80vh] overflow-y-auto">
                  {GENRES.map((genre) => (
                    <NavLink
                      key={genre}
                      to={`/genre/${genre}`}
                      className={dropdownItemStyle}
                      onClick={() => setIsGenreOpen(false)}
                    >
                      {genre}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Navigation Links (Visible >= lg) */}
            <nav className="hidden lg:flex items-center gap-8 ml-6">
              {CATEGORIES.map((cat) => (
                <NavLink 
                  key={cat.name} 
                  to={cat.path} 
                  className={`${baseTextStyle} ${cat.color} hover:scale-105`}
                >
                  {cat.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* --- CENTER SECTION: Logo --- */}
          {/* Mobile: Static center | Desktop: Absolute center */}
          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <NavLink to="/">
              <img
                src={logo}
                alt="CloudVibes Logo"
                className="h-12 w-auto md:h-16 lg:h-20 object-contain transition-all" 
              />
            </NavLink>
          </div>

          {/* --- RIGHT SECTION: Cart --- */}
          <div className="flex items-center gap-4">
            {/* Search Placeholder (Hidden on small mobile if needed, or toggleable) */}
            {/* <div className="hidden md:block">...SearchInput...</div> */}

            <div className="pl-4 lg:pl-12 lg:border-l border-gray-200">
              <CartWidget />
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE DRAWER (Overlay) --- */}
      {/* Lógica: Si isMobileMenuOpen es true, mostramos el overlay y el menú */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop Oscuro */}
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Panel Lateral (Drawer) */}
        <div 
          className={`absolute top-0 left-0 w-[80%] max-w-[300px] h-full bg-white shadow-2xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header del Drawer */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Contenido Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
              
              {/* Sección Categorías */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Consolas</h3>
                {CATEGORIES.map((cat) => (
                  <NavLink 
                    key={cat.name}
                    to={cat.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-semibold ${cat.color}`}
                  >
                    {cat.name}
                  </NavLink>
                ))}
              </div>

              <hr className="border-gray-100" />

              {/* Sección Géneros */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Géneros</h3>
                <div className="grid grid-cols-1 gap-2">
                  {GENRES.map((genre) => (
                    <NavLink
                      key={genre}
                      to={`/genre/${genre}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-600 py-1 hover:text-black transition-colors"
                    >
                      {genre}
                    </NavLink>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}