import axios from 'axios'

const userAPI = axios.create({
  baseURL: 'https://poesia-evento-backend.onrender.com/api/v1/users'
})

export const getUser = async (id) => {
  const response = await userAPI.get(`/${id}`)
  const data = await response.data

  return data.body
}

export const login = async (body) => {
  const response = await userAPI.post('/login', body)
  const data = await response.data

  return data.body
}
