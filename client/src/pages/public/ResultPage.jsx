import { useState, useEffect } from 'react'
import ResultPDF from '../../components/ResultPDF'
import { MdOutlineDateRange } from 'react-icons/md'
import { PDFDownloadLink } from '@react-pdf/renderer'

const PdfCreator = ({ carnet, nombre, generoPoesia, fechaInscripcion, fechaDeclamacion }) => {
  return (
    <PDFDownloadLink
      document={
        <ResultPDF
          carnet={carnet}
          nombre={nombre}
          generoPoesia={generoPoesia}
          fechaInscripcion={new Date(fechaInscripcion).toLocaleDateString('es-MX')}
          fechaDeclamacion={new Date(fechaDeclamacion).toLocaleDateString('es-MX')}
        />
          }
      fileName={`${carnet}-declamacion-${new Date(fechaInscripcion).toLocaleDateString('es-MX')}.pdf`}
    >
      {/* <button className='flex flex-col justify-end bg-gray-800 px-2 py-1 rounded text-white'> */}

      <p className='mb-3 font-normal text-gray-500 dark:text-gray-400 hover:text-white hover:cursor-pointer'>Descargar</p>

      {/* </button> */}
    </PDFDownloadLink>
  )
}

function ResultPage () {
  const [data, setData] = useState({})

  useEffect(() => {
    const userData = window.localStorage.getItem('resultData')

    if (userData) {
      setData(JSON.parse(userData))
    }
  }, [])

  return (
    <div className='p-5 flex justify-center'>
      <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex justify-center'>
          <MdOutlineDateRange className='text-3xl' />
        </div>

        <a>
          <h5 className='mb-2 text-2xl cursor-default font-semibold tracking-tight text-gray-900 dark:text-white'>Resultado</h5>
        </a>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Nombre - Carnet:</p>
        <p className='mb-3 font-normal text-gray-500 dark:text-white'>{data.nombre} - {data.carnet}</p>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Género de poesía:</p>
        <p className='mb-3 font-normal text-gray-500 dark:text-white'>{data.genero_poesia}</p>

        <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Fecha de declamación:</p>
        <p className='mb-3 font-normal text-gray-500 dark:text-white'>{data.fecha_declamacion ? (new Date(data.fecha_declamacion).toLocaleDateString('es-MX')) : '-'}</p>

        {data.carnet ? <PdfCreator carnet={data.carnet} nombre={data.nombre} generoPoesia={data.genero_poesia} fechaInscripcion={data.fecha_inscripcion} fechaDeclamacion={data.fecha_declamacion} /> : ''}
      </div>
    </div>
  )
}

export default ResultPage
