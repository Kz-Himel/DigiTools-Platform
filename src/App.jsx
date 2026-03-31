import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Stats from './components/Stats/Stats'

const dataFetching = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {

  const dataPromise = dataFetching();

  return (
    <>
    {/* Navbar */}
    <Navbar />

    {/* Banner */}
    <Banner />

    {/* Stats */}
    <Stats />
    </>
  )
}

export default App
