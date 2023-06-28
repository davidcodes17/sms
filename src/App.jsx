import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import '../src/styles/global.css'
import Signin from './pages/Signin'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<Signin />}></Route>
    </Routes>
  )
}

export default App