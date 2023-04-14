import { Schema, model } from "mongoose";
import { Registrations } from "../interfaces/registrations.interface";

// * registrations schema based on registration interface

const RegistrationsSchema = new Schema<Registrations>(
  {
    carnet: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
      enum: ["masculino", "femenino"],
    },
    telefono: {
      type: String,
      required: true,
    },
    fecha_nacimiento: {
      type: String,
      required: true,
    },
    carrera: {
      type: String,
      required: true,
    },
    genero_poesia: {
      type: String,
      required: true,
      enum: ["Lírica", "Épica", "Dramática"],
    },
    fecha_inscripcion: {
      type: String,
      required: true,
    },
    fecha_declamacion: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  { timestamps: true, versionKey: false }
);

//* model creation
const RegistrationModel = model("registrations", RegistrationsSchema);
export default RegistrationModel;
