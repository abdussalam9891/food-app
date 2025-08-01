import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Cart from './pages/cart/Cart'



const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
      
         
      </Routes>
     
    </div>
  )
}

export default App