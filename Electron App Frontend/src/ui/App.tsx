import { useState } from 'react'
import './styles/App.css'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Signup';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path = '/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
