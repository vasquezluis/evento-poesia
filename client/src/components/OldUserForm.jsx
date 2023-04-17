import './UserForm.css'
import { useFormik } from 'formik'
import { registrationsSchema } from '../schemas/registrationsSchema'

import CustomSelect from './CustomSelect'

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log(values)

  actions.resetForm()
}

function UserForm () {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      carnet: '',
      nombre: '',
      direccion: '',
      genero: '',
      telefono: '',
      fecha_nacimiento: '',
      carrera: '',
      genero_poesia: ''
    },
    validationSchema: registrationsSchema,
    onSubmit
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className='mb-2'>
          <label htmlFor='carnet' className='pr-2'>
            Carnet
          </label>
          <input
            value={values.carnet}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='carnet'
            id='carnet'
            placeholder='Introduce tu carnet'
            className={errors.carnet && touched.carnet ? 'input-error' : ''}
          />
          {errors.carnet && touched.carnet && (
            <p className='error'>{errors.carnet}</p>
          )}
        </div>

        <div className='mb-2'>
          <label htmlFor='nombre' className='pr-2'>
            Nombre completo
          </label>
          <input
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='nombre'
            id='nombre'
            placeholder='Introduce tu nombre'
            className={errors.nombre && touched.nombre ? 'input-error' : ''}
          />
          {errors.nombre && touched.nombre && (
            <p className='error'>{errors.nombre}</p>
          )}
        </div>

        <div className='mb-2'>
          <label htmlFor='direccion' className='pr-2'>
            Dirección
          </label>
          <input
            value={values.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='direccion'
            id='direccion'
            placeholder='Introduce tu dirección'
            className={errors.direccion && touched.direccion ? 'input-error' : ''}
          />
          {errors.direccion && touched.direccion && (
            <p className='error'>{errors.direccion}</p>
          )}
        </div>

        {/* // TODO genero */}

        <CustomSelect
          label='Job Type'
          name='jobType'
          type='text'
          placeholder='Please select a job'
        >
          <option value=''>Please select a job type</option>
          <option value='developer'>Developer</option>
          <option value='designer'>Designer</option>
          <option value='manager'>Manager</option>
          <option value='other'>Other</option>
        </CustomSelect>

        <div className='mb-2'>
          <label htmlFor='telefono' className='pr-2'>
            Teléfono
          </label>
          <input
            value={values.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='telefono'
            id='telefono'
            placeholder='Introduce tu número de teléfono'
            className={errors.telefono && touched.telefono ? 'input-error' : ''}
          />
          {errors.telefono && touched.telefono && (
            <p className='error'>{errors.telefono}</p>
          )}
        </div>

        <div className='mb-2'>
          <label htmlFor='carrera' className='pr-2'>
            Carrera
          </label>
          <input
            value={values.carrera}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='carrera'
            id='carrera'
            placeholder='Introduce tu carrera'
            className={errors.carrera && touched.carrera ? 'input-error' : ''}
          />
          {errors.carrera && touched.carrera && (
            <p className='error'>{errors.carrera}</p>
          )}
        </div>

        <div>
          <button
            type='submit'
            className='rounded font-bold cursor-pointer px-2 py-1 bg-green-400'
            disabled={isSubmitting}
          >
            Enviar
          </button>
        </div>

      </form>
    </div>
  )
}

export default UserForm
