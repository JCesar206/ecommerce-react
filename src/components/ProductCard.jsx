import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { LanguageContext } from "../context/LanguageContext";

export default function ProductCard({ product }) {
  const [stock, setStock] = useState(product.stock);
  const { addToCart } = useContext(CartContext);
  const { lang, texts } = useContext(LanguageContext);

  const handleAdd = () => {
    if (stock > 0) {
      addToCart(product);
      setStock(stock - 1);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">

      <div className="flex justify-center">
        <img src={product.image}
          className="w-42 h-42 object-containt rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"/>
      </div>

        <h2 className="mt-3 font-semibold text-lg">{product.name}</h2>
        <p className="text-sm opacity-80">{product.description}</p>
        <p className="font-bold mt-1">${product.price}</p>
        <p className="text-sm">Stock: {stock}</p>

      <button
        onClick={handleAdd}
        disabled={stock === 0}
        className="mt-3 w-full bg-black text-white font-semibold py-2 rounded-lg disabled:opacity-40 transition cursor-pointer"
      >
        {texts[lang].add}
      </button>
    </div>
  );
}