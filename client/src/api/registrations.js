import axios from 'axios'

const registrationAPI = axios.create({
  baseURL: 'http://localhost:3000/api/v1/registrations'
})

export const getRegistrations = async () => {
  const response = await registrationAPI.get('/')
  const data = response.data

  return data.body
}

export const createRegistration = async (registration) => await registrationAPI.post('/', registration)
