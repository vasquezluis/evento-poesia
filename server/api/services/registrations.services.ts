import { Registrations } from "../interfaces/registrations.interface";
import RegistrationModel from "../models/registrations.model";

import {
  isValidCard,
  isValidGender,
  getCurrentAge,
  isValidPoetry,
  get5NextDays,
  getLastBusinessDayOfMonth,
  getFridayOfWeek,
} from "../helpers/createRegistrationsHelper";

export const getRegistration = async (id: string) => {
  try {
    const response = await RegistrationModel.findById(id);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getRegistrations = async () => {
  try {
    const response = await RegistrationModel.find({});

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createRegistrations = async (body: Registrations) => {
  try {
    let userData = { ...body };

    // * validations
    const validCard = isValidCard(userData.carnet);
    const validGender = isValidGender(userData.genero);
    const currentAge = getCurrentAge(userData.fecha_nacimiento);
    const validPoetry = isValidPoetry(userData.genero_poesia);

    if (validCard && validGender && currentAge > 17 && validPoetry) {
      userData.fecha_nacimiento = new Date(
        userData.fecha_nacimiento
      ).toISOString();
      userData.fecha_inscripcion = new Date().toISOString();
      userData.active = true;

      // * create fecha_declamacion
      if (
        userData.genero_poesia === "Dramática" &&
        userData.carnet[5] === "1"
      ) {
        userData.fecha_declamacion = get5NextDays(new Date(), 5).toISOString();
      } else if (
        userData.carnet[5] == "3" &&
        userData.genero_poesia == "Épica"
      ) {
        userData.fecha_declamacion = getLastBusinessDayOfMonth(
          new Date()
        ).toISOString();
      } else {
        userData.fecha_declamacion = getFridayOfWeek(new Date()).toISOString();
      }

      const response = await RegistrationModel.create(userData);

      return response;
    } else {
      return "Algun campo es ivalido";
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const updateRegistrations = async (id: string, body: any) => {
  try {
    const response = await RegistrationModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const deleteRegistrations = async (id: string) => {
  try {
    const response = await RegistrationModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
