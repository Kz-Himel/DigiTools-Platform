import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Stats from './components/Stats/Stats'
import ToggleTabs from './components/Toggle/Toggle'
import { useState } from 'react';

// const dataFetching = async () => {
//   const res = await fetch("/data.json");
//   return res.json();
// };

function App() {
  const [activeTab, setActiveTab] = useState("products");

  // const dataPromise = dataFetching();

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
    </>
  )
}

export default App
