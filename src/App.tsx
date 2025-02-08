import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CommunicatorPage from './app/pages/CommunicatorPage'
import RegistrationFormPage from './app/pages/RegistrationFormPage'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationFormPage />} />
        <Route path="/chat" element={<CommunicatorPage />} />
      </Routes>
    </Router>
  )
}
