import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/_partials/Navbar'
import LoginPage from './pages/public/LoginPage'
import RegistrationPage from './pages/public/RegistrationPage'
import UserPage from './pages/private/UserPage'

function App () {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/user' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
