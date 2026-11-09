import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import DeliverySignUp from './pages/DeliverySignUp'
import Signin from './pages/Signin'
import AdminSignUp from './pages/AdminSignUp'
import SignUp from './pages/SignUp'
import AdminSignin from './pages/AdminSignin'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/admin/signup' element={<AdminSignUp/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signup/delivery' element={<DeliverySignUp />} />
      <Route path='/admin/signin' element={<AdminSignin/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
  )
}

export default App