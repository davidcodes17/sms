import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import '../src/styles/global.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
    </Routes>
  )
}

export default App