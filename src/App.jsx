import { BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePages'
import AboutPage from './pages/AboutPage'
import NoEncontrado from './pages/NoEncontrado'
import Carrito from "./pages/Carrito"
import Producto from "./pages/Producto"
import Resgitro from "./pages/Resgitro"
import Tienda from "./pages/Tienda"
import Nav from './components/Nav'
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  
  const[allProducts, setAllProducts] = useState([])
  const [ total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav 
      countProducts={countProducts}
    />
    <Routes>
      <Route path="/" element={
       <HomePage></HomePage>
    }/>
    <Route path="/carrito" element={
      <Carrito
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      ></Carrito>
    }></Route>
    <Route path="/about" element={
       <AboutPage/>
    }/>
    <Route path="/tienda" element={
       <Tienda
       allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}

       />
    }/>
    <Route path="/registro" element={
       <Resgitro></Resgitro>
    }/>
    <Route path="/producto/:id" element={
       <Producto
       ></Producto>
    }/>
    <Route path="*" element={
      <NoEncontrado/>
    }></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
