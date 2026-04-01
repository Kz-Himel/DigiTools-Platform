import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Stats from './components/Stats/Stats'
import ToggleTabs from './components/Toggle/Toggle'
import { Suspense, useState } from 'react';
import Cards from './components/AllProducts/Cards';
import Cart from './components/AllProducts/Cart'

const dataFetching = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItem, setCartItem] = useState([]);

  const dataPromise = dataFetching();

  const handleAddToCart = (product) => {
  setCartItem((prev) => [...prev, product]);
};

  return (
    <>
    {/* Navbar */}
    <Navbar />

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
        dataPromise={dataPromise}
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
      handleCheckout={() => alert("Checkout Successful")}
    />
  )
}
    </>
  )
}

export default App
