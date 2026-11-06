import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import UserSignUp from './pages/userSignUp'
import AdminSignUp from './pages/adminSignUp'
import DeliverySignUp from './pages/DeliverySignUp'
import Signin from './pages/Signin'


function App() {


  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/signup/user' element={<UserSignUp/>}/>
      <Route path="/signup/admin" element={<AdminSignUp />} />
      <Route path="/signup/deliverypartners" element={<DeliverySignUp />} />
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
  )
}

export default App
