import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, setCart, clearCart } = useContext(CartContext);
  const [done, setDone] = useState(false);

  // Agrupar productos por ID
  const grouped = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id]
      ? { ...acc[item.id], qty: acc[item.id].qty + 1 }
      : { ...item, qty: 1 };
    return acc;
  }, {});

  const totalItems = cart.length;
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const addOne = (product) => {
    setCart([...cart, product]);
  };

  const removeOne = (id) => {
    const index = cart.findIndex(p => p.id === id);
    if (index !== -1) {
      const updated = [...cart];
      updated.splice(index, 1);
      setCart(updated);
    }
  };

  const finishBuy = () => {
    clearCart();
    setDone(true);
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl mt-4">
      <h2 className="font-bold text-lg mb-3">Carrito</h2>

      {Object.values(grouped).map(item => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-2"
        >
          <div>
            <p>{item.name}</p>
            <p className="text-sm opacity-70">
              ${item.price} x {item.qty}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => removeOne(item.id)}
              className="px-2 bg-red-500 hover:bg-red-700 text-white rounded font-bold cursor-pointer"
            >
              -
            </button>
            <button
              onClick={() => addOne(item)}
              className="px-2 bg-green-500 hover:bg-green-700 text-white rounded font-bold cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
        <div className="flex justify-between mt-4 font-semibold">
          <span>Total ({totalItems})</span>
          <span>${totalAmount}</span>
        </div>

        <div className="flex gap-2 mt-4">
        <button
          onClick={finishBuy}
          className="flex-1 bg-green-600 hover:bg-green-800 text-white font-semibold py-2 rounded-lg cursor-pointer"
        >
          Finalizar compra
        </button>

        <button
          onClick={clearCart}
          className="flex-1 bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg cursor-pointer"
        >
          Limpiar carrito
        </button>
      </div>
      </>
      )}

      {done && (
        <p className="mt-4 text-center text-green-500 font-semibold">
          Gracias por su compra 🙌
        </p>
      )}
    </div>
  );
}