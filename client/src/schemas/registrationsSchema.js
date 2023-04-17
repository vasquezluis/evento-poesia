import * as yup from 'yup'

const regex = /^[aA][a-zA-Z1-9][5][a-zA-Z1-9][a-zA-Z1-9][139]$/

export const registrationsSchema = yup.object().shape({
  carnet: yup
    .string()
    .min(6, 'El carnet debe tener al meno 6 caracteres')
    .matches(regex, { message: 'Introduce un carnet válido' })
    .required('El carnet es requerido'),
  nombre: yup
    .string()
    .required('El nombre completo es requerido'),
  direccion: yup
    .string()
    .required('La direccion es requerida'),
  genero: yup
    .string()
    .oneOf(['masculino', 'femenino'], 'genero inválido')
    .required('El genero es requerido'),
  telefono: yup
    .number().typeError('Por favor introduce numeros')
    .min(8, 'El telefono debe tener 8 caracteres')
    .required('El telefono es requerido'),
  fecha_nacimiento: yup
    .string()
    .required('La fecha de nacimiento es requerida'),
  carrera: yup
    .string()
    .required('La carrera del estudiante es requerida'),
  genero_poesia: yup
    .string()
    .oneOf(['Lírica', 'Épica', 'Dramática'])
    .required('El genero de poesia es requerido')
})
