import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Component/Pages/Home'
import Cart from './Component/Pages/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default App
