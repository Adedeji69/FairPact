import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'

import DeliverySignUp from './pages/DeliverySignUp'
import Signin from './pages/Signin'
import AdminSignUp from './pages/adminSignUp'
import UserSignUp from './pages/userSignUp'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/signup/admin' element={<AdminSignUp/>}/>
      <Route path='/signup' element={<UserSignUp/>}/>
      <Route path='/signup/delivery' element={<DeliverySignUp />} />
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
  )
}

export default App