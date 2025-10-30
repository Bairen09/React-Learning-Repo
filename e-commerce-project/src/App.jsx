import { Routes, Route } from 'react-router'
import axios from 'axios'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { Orders } from './pages/orders/Orders'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'
import { useEffect,useState } from 'react'

function App() {
  const[cart, setCart]= useState([])
  
   useEffect(()=>{
      axios.get('/api/cart-items?expand=product')
        .then((response)=>{
            setCart(response.data)
        })
   },[])     
  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart}/>} />
      <Route path='checkout' element={<CheckoutPage cart={cart}/>} />
      <Route path='orders' element={<Orders cart={cart}/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
    </Routes>

  )
}

export default App
