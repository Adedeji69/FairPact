import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import UserSignUp from './pages/userSignUp'
import AdminSignUp from './pages/adminSignUp'
import LogisticsSignUp from './pages/LogisticsSignUp'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path="/signup/user" element={<UserSignUp />} />
      <Route path="/signup/admin" element={<AdminSignUp />} />
      <Route path="/signup/logistics" element={<LogisticsSignUp />} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
