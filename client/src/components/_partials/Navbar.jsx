import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { unSetUser } from '../../reducers/userSlice'

function Navbar () {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(unSetUser())
    window.localStorage.removeItem('loggedUser')
  }

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link to='/' className='flex items-center'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Poesia
          </span>
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {/* if user is logged -> shows register form for students */}
            {user.user.length === 0
              ? (
                <li>
                  <Link
                    to='/'
                    className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
                    aria-current='page'
                  >
                    Registro
                  </Link>
                </li>
                )
              : (
                  ''
                )}

            {user.user.length === 0
              ? (
                <li>
                  <Link
                    to='/result'
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    Resultado
                  </Link>
                </li>
                )
              : (
                  ''
                )}
            {user.user.length === 0
              ? (
                <li>
                  <Link
                    to='/login'
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    Login
                  </Link>
                </li>
                )
              : (
                  ''
                )}
            {user.user !== ''
              ? (
                <li>
                  <Link
                    to='/admin'
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  >
                    Admin
                  </Link>
                </li>
                )
              : (
                  ''
                )}
            {user.user !== ''
              ? (
                <li>
                  <Link
                    to='/'
                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    onClick={handleLogout}
                  >
                    LogOut
                  </Link>
                </li>
                )
              : (
                  ''
                )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
