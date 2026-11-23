import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import DeliverySignUp from './pages/DeliverySignUp'
import Signin from './pages/Signin'
import AdminSignUp from './pages/AdminSignUp'
import SignUp from './pages/SignUp'
import AdminSignin from './pages/AdminSignin'
import UserDashboard from './pages/UserDashboard'
import Escrows from './pages/Escrows'
import Transactions from './pages/Transactions'
import Disputes from './pages/Disputes'
import DeliverySignin from './pages/DeliverySignin'
import PartnerDashboard from './pages/PartnerDashboard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/admin/signup' element={<AdminSignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/partner/signup' element={<DeliverySignUp />} />
      <Route path='/partner/signin' element={<DeliverySignin />} />
      <Route path='/admin/signin' element={<AdminSignin />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/user/dashboard' element={<UserDashboard />} />
      <Route path='/user/escrows' element={<Escrows />} />
      <Route path='/user/transactions' element={<Transactions />} />
      <Route path='/user/disputes' element={<Disputes />} />
      <Route path='/partner/dashboard' element={<PartnerDashboard/>}/>
    </Routes>
  )
}

export default App