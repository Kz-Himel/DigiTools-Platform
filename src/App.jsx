import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Stats from './components/Stats/Stats'
import ToggleTabs from './components/Toggle/Toggle'
import { Suspense, useState } from 'react';
import Cards from './components/AllProducts/Cards'

const dataFetching = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [activeTab, setActiveTab] = useState("products");

  const dataPromise = dataFetching();

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
    />

    {/* All Products */}
    <Suspense fallback={<div className="flex justify-center item-center min-h-screen"><h1 className="loading loading-ring loading-xl"></h1></div>}>
      <Cards dataPromise={dataPromise}/>
    </Suspense>
    </>
  )
}

export default App
