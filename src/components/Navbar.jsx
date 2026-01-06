import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);
  const { cart } = useContext(CartContext);

  const totalItems = cart.length;
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow">
      <h1 className="font-bold">Ecommerce</h1>
      
      <div className="flex items-center gap-4">
        <div className="text-sm text-right">
          <p>{totalItems} artículos</p>
          <p className="font-semibold">${totalAmount}</p>
        </div>
        
        <button onClick={() => setDark(!dark)} className="cursor-pointer">🌓</button>
        <button onClick={() => setLang(lang === "es" ? "en" : "es")} className="cursor-pointer">
          {lang.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}