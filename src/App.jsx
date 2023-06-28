import './App.scss'
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";
import Hero from "./components/Hero.jsx";
import Popular from "./components/Popular.jsx";
import Deals from "./components/Deals.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
        <Header />
        <Categories />
        <Hero />
        <Popular />
        <Deals />
        <Footer />
    </>
  )
}

export default App
