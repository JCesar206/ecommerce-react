import { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";

  const initialProducts = [
    { id: 1, name: "AirPods", price: 2998.99, stock: 15, image: "./images/airPods.jpg" },
    { id: 2, name: "SmartBand", price: 701.24, stock: 30, image: "./images/smartBand.jpg" },
    { id: 3, name: "SmartWatch", price: 2199, stock: 18, image: "./images/smartWatch.jpg" },
    { id: 4, name: "Tablet", price: 4727.07, stock: 19, image: "./images/tablet.jpg" },
    { id: 5, name: "SmartTV", price: 4399, stock: 14, image: "./images/tv.jpg" },
    { id: 6, name: "Xbox Serie S", price: 6299, stock: 23, image: "./images/xbox.jpg" },
    { id: 7, name: "PlayStation 5", price: 9999, stock: 20, image: "./images/playStation5.jpg" },
    { id: 8, name: "Nintendo Switch 2", price: 7799, stock: 18, image: "./images/nintendoSwitch2.jpg" },
    { id: 9, name: "Laptop", price: 8199, stock: 19, image: "./images/laptop.jpg" },
    { id: 10, name: "SmartPhone", price: 9499.99, stock: 15, image: "./images/smartPhone.jpg" },
    { id: 11, name: "AMD 7", price: 2809, stock: 9, image: "./images/amdRyzen7.jpg" },
    { id: 12, name: "Intel Core 7 Ultra", price: 7847.93, stock: 18, image: "./images/intelCore7Ultra.jpg" },
  ];

  function App() {
    const [products, setProducts] = useState(initialProducts);
    const [cart, setCart] = useState({});
    const [message, setMessage] = useState("");
  
    const addToCart = (productId) => {
      const updatedProducts = [...products];
      const product = updatedProducts.find(p => p.id === productId);
      if (product.stock > 0) {
        product.stock -= 1;
        setProducts(updatedProducts);
        setCart(prev => ({
          ...prev,
          [productId]: (prev[productId] || 0) + 1
        }));
      }
    };
  
    const removeFromCart = (productId) => {
      if (cart[productId]) {
        const updatedProducts = [...products];
        const product = updatedProducts.find(p => p.id === productId);
        product.stock += 1;
        setProducts(updatedProducts);
        setCart(prev => ({
          ...prev,
          [productId]: prev[productId] - 1
        }));
      }
    };
  
    const handlePurchase = () => {
      setCart({});
      setMessage("🪄 ¡Gracias por tu compra mágica!");
    };

    const total = Object.entries(cart).reduce((acc, [productId, qty]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return acc + product.price * qty;
    }, 0);

  return (
    <div className="ming-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./images/ecommerce.jpg')"}}>  
    <div className="min-h-screen flex flex-col items-center justify-center pb-40 px-4">
      <h1 className="text-3xl font-bold mb-6 text-white">🧙 Tienda Mágica</h1>
      <div className="w-full flex flex-col items-center justify-center mb-6">

      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">🛒 Carrito</h2>
        {Object.keys(cart).length === 0 ? (
        <p className="text-gray-700 font-semibold">Tu carrito está vacío 🪄</p>
        ) : (
        <>
        <ul className="text-center font-semibold">
          {Object.entries(cart).map(([productId, qty]) => {
            const product = products.find(p => p.id === parseInt(productId));
            return (
              <li key={productId}>
                {product.name} x {qty}
              </li>
            );
          })}
        </ul>
        <p className="font-semibold mt-2">
          Total: ${total.toFixed(2)}
        </p>
      </>
    )}

    <button
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold rounded disabled:opacity-80"
      onClick={handlePurchase}
      disabled={Object.keys(cart).length === 0}
    >
      Finalizar Compra 🛍️
    </button>

    {message && <p className="mt-2 text-green-600">{message}</p>}
  </div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="mb-2 w-32 h-32 object-contain rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm font-semibold">💰 ${product.price}</p>
            <p className="text-sm mb-2 font-semibold">📦 Stock: {product.stock}</p>
            <div className="flex gap-2">
              <button
                className="bg-green-400 hover:bg-green-700 text-white px-2 py-1 rounded disabled:opacity-60"
                onClick={() => addToCart(product.id)}
                disabled={product.stock === 0}
              >
                Agregar
              </button>
              <button
                className="bg-red-400 hover:bg-red-800 text-white px-2 py-1 rounded disabled:opacity-80"
                onClick={() => removeFromCart(product.id)}
                disabled={!cart[product.id]}
              >
                Quitar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;