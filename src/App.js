import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components'
import { Home, USCA, FAQ } from './container'
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} /> 
          <Route path="/usca" element={<USCA />} /> 
          <Route path="/faq" element={<FAQ />} /> 
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App