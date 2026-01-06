import { createContext, useState } from "react";

export const LanguageContext = createContext();

const texts = {
  es: {
    add: "Agregar",
    cart: "Carrito",
    buy: "Comprar",
    completed: "Compra completada 🎉",
  },
  en: {
    add: "Add",
    cart: "Cart",
    buy: "Buy",
    completed: "Purchase completed 🎉",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");

  return (
    <LanguageContext.Provider value={{ lang, setLang, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};