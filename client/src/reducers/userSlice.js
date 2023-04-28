import { createSlice } from '@reduxjs/toolkit'

// -> aqui se declara el estado inicial y reducer
// -> slice = reducers + actions

const initialValues = {
  id: '',
  user: '',
  token: '',
  permissions: [],
  roles: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialValues,
  // * funcion que toma el state y action, y hace algo
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id
      state.user = action.payload.user
      state.token = action.payload.token
      state.permissions = action.payload.permissions
      state.roles = action.payload.roles
    },
    unSetUser: (state, action) => {
      state.id = ''
      state.user = ''
      state.token = ''
      state.permissions = []
      state.roles = []
    }
  }
})

// -> exportar actions
export const { setUser, unSetUser } = userSlice.actions

// -> lo que va a estar en el store
export default userSlice.reducer
