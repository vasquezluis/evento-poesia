import axios from 'axios'

const registrationAPI = axios.create({
  baseURL: 'https://poesia-evento-backend.onrender.com/api/v1/registrations'
})

export const getRegistrations = async () => {
  const response = await registrationAPI.get('/')
  const data = response.data

  return data.body
}

export const createRegistration = async (registration) => await registrationAPI.post('/', registration)
