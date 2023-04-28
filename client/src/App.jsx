import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/_partials/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

import LoginPage from './pages/public/LoginPage'
import RegistrationPage from './pages/public/RegistrationPage'
import ResultPage from './pages/public/ResultPage'
import AdminPage from './pages/private/Adminpage'

// -> global data -> redux
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from './reducers/userSlice'
import { getTokenFromLocalStorage } from './libs/axios'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')

    if (loggedUser) {
      const user = JSON.parse(loggedUser)

      // -> giving axios the token for operations
      getTokenFromLocalStorage(`${user.token}`)

      dispatch(setUser({
        id: user.userData.id,
        user: user.userData.user,
        token: user.token,
        permissions: user.userData.permissions,
        roles: user.userData.roles
      }))
    }
  }, [])

  const user = useSelector((state) => state.user)

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
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>

        <ToastContainer
          theme='dark'
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          // closeOnClick
          rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
