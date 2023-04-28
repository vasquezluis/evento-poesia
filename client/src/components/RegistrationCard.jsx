import { useState, useEffect } from 'react'
import { MdOutlineDateRange } from 'react-icons/md'
import { getCurrentAge } from '../helpers/getCurrentAge'

function RegistrationCard ({ carnet, nombre, direccion, genero, telefono, fechaNacimiento, carrera, generoPoesia, fechaInscripcion, fechaDeclamacion }) {
  const [edad, setEdad] = useState(0)

  useEffect(() => {
    const result = getCurrentAge(fechaNacimiento)

    setEdad(result)
  })

  return (
    <div className='p-2'>
      <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex justify-center'>
          <MdOutlineDateRange className='text-3xl' />
        </div>
        <a>
          <h5 className='mb-2 text-2xl cursor-default font-semibold tracking-tight text-gray-900 dark:text-white'>Resultado</h5>
        </a>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Nombre - Carnet:</p>
        <p className='mb-3 font-normal text-gray-500 dark:text-white'>{nombre} - {carnet}</p>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Carrera:</p>
        <p className='mb-3 font-normal text-gray-500 dark:text-white'>{carrera}</p>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Edad:</p>
        <p className='mb-3 font-normal text-gray-500 dark:text-white'>{edad}</p>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Género de poesía:</p>
        <p className='mb-3 font-normal text-gray-500 dark:text-white'>{generoPoesia}</p>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Fecha de declamación:</p>
        <p className='mb-3 font-normal text-gray-500 dark:text-white'>{fechaDeclamacion ? new Date(fechaDeclamacion).toLocaleDateString('es-MX') : '-'}</p>
      </div>
    </div>
  )
}

export default RegistrationCard
