import './App.css'
import { Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Stats from './components/Stats/Stats'
import ToggleTabs from './components/Toggle/Toggle'
import Cards from './components/AllProducts/Cards';
import Cart from './components/AllProducts/Cart'
import GetStarted from './components/GetSatrted/GetStarted'

const dataFetching = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItem, setCartItem] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
  dataFetching().then(data => {
    const updated = data.map(item => ({ ...item, purchased: false }));
    setProducts(updated);
  });
}, []);

  const handleAddToCart = (product) => {

    // Check if any duplaicate card there
  const exists = cartItem.find(item => item.id === product.id);
  if (exists) return;

  // Add card to carts
  setCartItem((prev) => [...prev, product]);

  // If card is there then give a alert
  setProducts(prev =>
    prev.map(p =>
      p.id === product.id ? { ...p, purchased: true } : p
    )
  );
};

  return (
    <>
    {/* Navbar */}
    <Navbar cartItem={cartItem}/>

    {/* Banner */}
    <Banner />

    {/* Stats */}
    <Stats />

    {/* Toogle */}
    <ToggleTabs
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    cartItem={cartItem}
    />

    {/* All Products */}
    {
  activeTab === "products" ? (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
      <h1 className="loading loading-ring loading-xl"></h1>
    </div>}>
      <Cards 
        products={products}
        handleAddToCart={handleAddToCart}
        cartItem={cartItem}
      />
    </Suspense>
  ) : (
    <Cart
      cartItem={cartItem}
      handleRemoveFromCart={(id) =>
        setCartItem(cartItem.filter((item) => item.id !== id))
      }
      handleCheckout={() => {
        setCartItem([]);
      }}
    />
  )
}

  {/* Get Started Section */}
  <GetStarted />
    </>
  )
}

export default App
