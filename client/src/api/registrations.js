import axios from 'axios'
import axiosWithToken from '../libs/axios.js'

const registrationsAPI = axios.create({
  baseURL: 'https://poesia-evento-backend.onrender.com/api/v1/registrations'
})

export const getRegistrations = async () => {
  const response = await axiosWithToken.get('/registrations')
  const data = response.data

  return data.body
}

export const createRegistration = async (registration) => await registrationsAPI.post('/', registration)
