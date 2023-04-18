import './UserForm.css'

// * FORMIK / YUP
import { Formik, Form } from 'formik'
import CustomInput from './CustomInput'

// * REACT-QUERY
import { useMutation } from 'react-query'
import { login } from '../api/users'

// * REACT-ROUTER-DOM
import { useNavigate } from 'react-router-dom'

function LoginForm () {
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      window.localStorage.setItem('userData', JSON.stringify(data))

      navigate('/admin')
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const onSubmit = async (values, actions) => {
    loginMutation.mutate({ user: values.user, password: values.password })

    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{ user: '', password: '' }}
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

          <button disabled={isSubmitting} type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4'>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
