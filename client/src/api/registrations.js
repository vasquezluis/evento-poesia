import axios from 'axios'

const registrationAPI = axios.create({
  baseURL: 'http://localhost:3000/api/v1/registrations'
})

export const createRegistration = (registration) => registrationAPI.post('/', registration)
