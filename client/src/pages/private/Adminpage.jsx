import RegistrationCard from '../../components/RegistrationCard'
import { useQuery } from 'react-query'
import { getRegistrations } from '../../api/registrations'

function AdminPage ({ user }) {
  const {
    isLoading,
    data: registrations,
    isError,
    error
  } = useQuery({
    queryKey: ['registrations'],
    queryFn: getRegistrations
    // select: (items) => items.reverse()
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className='flex flex-wrap'>
      {
        registrations.map((regis, index) => (
          <RegistrationCard
            key={regis._id}
            carnet={regis.carnet}
            nombre={regis.nombre}
            carrera={regis.carrera}
            fechaNacimiento={regis.fecha_nacimiento}
            generoPoesia={regis.genero_poesia}
            fechaDeclamacion={regis.fecha_declamacion}
          />
        ))
      }
    </div>
  )
}

export default AdminPage
