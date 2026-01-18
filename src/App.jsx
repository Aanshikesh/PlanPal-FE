import { useState } from 'react'

import './App.css'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import HomePage from './components/HomePage'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import { RecoilRoot } from 'recoil'
function App() {
  
  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage/>}></Route>
      <Route path="/login" element={<LogIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
    </Routes>
     </BrowserRouter>
     </RecoilRoot>
    </>
  )
}


export default App
