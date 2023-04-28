import * as yup from 'yup'

const carnetRegex = /^[aA][a-zA-Z1-9][5][a-zA-Z1-9][a-zA-Z1-9][139]$/
const nombreRegex = /^[^0-9]*$/
const telefonoRegex = /^(0|[1-9]\d{0,7})$/

export const registrationsSchema = yup.object().shape({
  carnet: yup
    .string()
    .min(6, 'El carnet debe tener al meno 6 caracteres')
    .matches(carnetRegex, { message: 'Introduce un carnet válido' })
    .required('El carnet es requerido'),
  nombre: yup
    .string()
    .matches(nombreRegex, { message: 'El nombre no debe incluir caracteres numericos' })
    .required('El nombre completo es requerido'),
  direccion: yup
    .string()
    .required('La direccion es requerida'),
  genero: yup
    .string()
    .oneOf(['masculino', 'femenino'], 'genero inválido')
    .required('El genero es requerido'),
  telefono: yup
    .string()
    .min(8, 'Introduce al meno 8 numeros')
    .matches(telefonoRegex, { message: 'Introduce un telefono válido' })
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
