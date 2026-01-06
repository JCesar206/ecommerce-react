import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white pb-16">
      <Navbar/>

      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </main>

      <Cart/>
      <Footer/>
    </div>
  );
}