import './UserForm.css'
import { getCurrentAge } from '../helpers/getCurrentAge'

// * FORMIK / YUP
import { Formik, Form } from 'formik'
import { registrationsSchema } from '../schemas/registrationsSchema'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import CustomDate from './CustomDate'

// * REACT-QUERY
import { useMutation } from 'react-query'
import { createRegistration } from '../api/registrations'

// * REACT-ROUTER-DOM
import { useNavigate } from 'react-router-dom'

function RegistrationForm () {
  const navigate = useNavigate()

  const addRegistrationMutation = useMutation({
    mutationFn: createRegistration,
    onSuccess: (data) => {
      const fechaDeclamacion = data.data.body.fecha_declamacion
      console.log(fechaDeclamacion)

      window.alert('Registrado correctamente! 😀')

      navigate('/login')
    },
    onError: (error) => {
      window.alert(error)
    }
  })

  const onSubmit = async (values, actions) => {
    if (getCurrentAge(values.fecha_nacimiento) < 18) {
      window.alert('Menores de 18 años no pueden participar 😥')
    } else {
      addRegistrationMutation.mutate({
        ...values,
        fecha_inscripcion: new Date().toISOString()
      })
    }

    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{ carnet: '', nombre: '', direccion: '', genero: '', telefono: '', fecha_nacimiento: '', carrera: '', genero_poesia: '' }}
      validationSchema={registrationsSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          className='w-[400px] bg-slate-800 p-5 rounded-md'
        >

          <h1 className='font-bold mb-3'>Registro</h1>

          <CustomInput
            label='Carnet'
            name='carnet'
            type='text'
            placeholder='Introduce tu carnet'
          />

          <CustomInput
            label='Nombre'
            name='nombre'
            type='text'
            placeholder='Introduce tu nombre'
          />

          <CustomInput
            label='Direccion'
            name='direccion'
            type='text'
            placeholder='Introduce tu dirección'
          />

          <CustomSelect
            label='Género'
            name='genero'
            type='text'
            placeholder='Selecciona tu género'
          >
            <option value=''>Selecciona tu género</option>
            <option value='masculino'>Masculino</option>
            <option value='femenino'>Femenino</option>
          </CustomSelect>

          <CustomInput
            label='Teléfono'
            name='telefono'
            type='text'
            placeholder='Introduce tu telefono'
          />

          <CustomDate
            label='Fecha de nacimiento'
            name='fecha_nacimiento'
            type='date'
            placeholder='Selecciona tu fecha de nacimiento'
          />

          <CustomInput
            label='Carrera'
            name='carrera'
            type='text'
            placeholder='Introduce tu carrera'
          />

          <CustomSelect
            label='Género de poesía'
            name='genero_poesia'
            type='text'
            placeholder='Selecciona el género de poesía'
          >
            <option value=''>Selecciona un género</option>
            <option value='Lírica'>Lírica</option>
            <option value='Épica'>Épica</option>
            <option value='Dramática'>Dramática</option>
          </CustomSelect>

          <button disabled={isSubmitting} type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4'>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
