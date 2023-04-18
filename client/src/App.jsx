import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/_partials/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

import LoginPage from './pages/public/LoginPage'
import RegistrationPage from './pages/public/RegistrationPage'
import AdminPage from './pages/private/Adminpage'
import ResultPage from './pages/public/ResultPage'

function App () {
  const [user, setUser] = useState({ user: '', roles: [] })

  useEffect(() => {
    const userData = window.localStorage.getItem('userData')

    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/result' element={<ResultPage />} />

          <Route
            path='/admin'
            element={
              <ProtectedRoute
                isAllowed={!!user && user.roles.includes('admin')}
                redirecTo='/login'
              >
                <AdminPage user={user.user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
