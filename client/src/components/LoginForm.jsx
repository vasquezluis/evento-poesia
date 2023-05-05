import './UserForm.css'
import { useState, useEffect } from 'react'

// * FORMIK / YUP
import { Formik, Form } from 'formik'
import { loginSchema } from '../schemas/loginSchema'
import CustomInput from './CustomInput'

// * REACT-QUERY
import { useMutation } from 'react-query'
import { authFunction } from '../api/auth'

// * REACT-ROUTER-DOM
import { useNavigate } from 'react-router-dom'

// * react-redux
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../reducers/userSlice.js'
import { getTokenFromLocalStorage } from '../libs/axios.js'

// * TOAST
import { toast } from 'react-toastify'

// * CAPTCHA
import ReCaptcha from './ReCaptcha'

function LoginForm () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [captchaToken, setcaptchaToken] = useState('')

  const notify = (user) => {
    toast.success(`🎉 Bienvenido ${user}!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark'
    })
  }
  const errorNotify = (message) => {
    toast.error(`💔 ${message}`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark'
    })
  }

  useEffect(() => {
    if (user && user.roles.includes('admin')) {
      navigate('/admin')
    }
  }, [])

  const loginMutation = useMutation({
    mutationFn: authFunction,
    onSuccess: (data, variables, context) => {
      notify(data.userData.user)

      // -> local storage from token
      window.localStorage.setItem('loggedUser', JSON.stringify(data))

      dispatch(setUser({
        id: data.userData.id,
        roles: data.userData.roles,
        user: data.userData.user
      }))

      // * set token to axios operations
      getTokenFromLocalStorage(`${data.token}`)

      // * redirect
      if (data.userData.roles.includes('admin')) {
        navigate('/admin')
      }
    },
    onError: (error, variables, context) => {
      if (error.response.status === 404) {
        errorNotify('Usuario no encontrado')
      }
      if (error.response.status === 401) {
        errorNotify('Contraseña incorrecta')
      }
    }
  })

  const onSubmit = async (values, actions) => {
    if (captchaToken) {
      try {
        loginMutation.mutate({ user: values.user, password: values.password })

        actions.resetForm()
      } catch (error) {
        errorNotify(`${error.message}`)
      }
    } else {
      errorNotify('😐 Captcha no resulto')
    }
  }

  const onChange = (token) => {
    setcaptchaToken(token)
  }

  return (
    <Formik
      initialValues={{ user: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          className='w-[400px] bg-slate-800 p-5 rounded-md'
        >

          <h1 className='font-bold mb-3'>Login</h1>

          <CustomInput
            label='Usuario'
            name='user'
            type='text'
            placeholder='Introduce tu usuario'
          />

          <CustomInput
            label='Contraseña'
            name='password'
            type='password'
            placeholder='Introduce tu contraseña'
          />

          <div className='flex justify-center'>
            <ReCaptcha
              sitekey='6LcfKeUlAAAAADjauxxmIz9QQSfRXIEkjQDPJje9'
              onChange={onChange}
            />
          </div>

          <button disabled={isSubmitting} type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4'>
            Enviar
          </button>

        </Form>
      )}

    </Formik>
  )
}

export default LoginForm
