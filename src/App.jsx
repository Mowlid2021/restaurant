import { Route, Routes } from "react-router-dom"
import Header from "./components/header.jsx/Header"
import About from "./components/pages/about/About"
import Contact from "./components/pages/contact/Contact"
import Home from "./components/pages/home/Home"
import Cart from "./components/pages/cart/Cart"
import "./App.css"
import AllProducts from "./components/pages/products/AllProducts"
import Footer from "./components/pages/footer/Footer"
import NotFound from "./components/pages/notfound/NotFound"

function App() {
  return (
    <>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
   
    </>
  )
}
export default App;