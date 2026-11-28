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
import PartnerDeliveries from './pages/PartnerDeliveries'
import PartnerEarnings from './pages/PartnerEarnings'

import UserProfile from './pages/UserProfile'
import UserSettings from './pages/UserSettings'
import PartnerProfile from './pages/PartnerProfile'
import PartnerSettings from './pages/PartnerSettings'

import AdminProfile from './pages/AdminProfile'
import AdminSettings from './pages/AdminSettings'
import AdminDashboard from './pages/AdminDashboard'
import AdminUsers from './pages/AdminUsers'
import AdminEscrows from './pages/AdminEscrows'
import AdminDisputes from './pages/AdminDisputes'

import NotFoundPage from './pages/NotFoundPage'
import AdminPartners from './pages/AdminPartners'


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
      <Route path='/user/profile' element={<UserProfile />} />
      <Route path='/user/settings' element={<UserSettings />} />

  
      <Route path='/partner/dashboard' element={<PartnerDashboard />} />
      <Route path='/partner/deliveries' element={<PartnerDeliveries />} />
      <Route path='/partner/earnings' element={<PartnerEarnings />} />
      <Route path='/partner/profile' element={<PartnerProfile />} />
      <Route path='/partner/settings' element={<PartnerSettings />} />

  
      <Route path='/admin/profile' element={<AdminProfile />} />
      <Route path='/admin/settings' element={<AdminSettings />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
      <Route path='admin/users' element={<AdminUsers/>}/>
      <Route path='/admin/escrows' element={<AdminEscrows/>}/>
      <Route path='/admin/disputes' element={<AdminDisputes/>}/>
      <Route path='/admin/partners' element={<AdminPartners/>}/>


      
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
