import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CommunicatorPage from './app/view/pages/CommunicatorPage'
import RegistrationForm from './app/view/pages/RegistrationFormPage'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/chat" element={<CommunicatorPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}
