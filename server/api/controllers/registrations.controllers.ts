import { Request, Response } from "express";
import {
  getRegistration,
  getRegistrations,
  createRegistrations,
  updateRegistrations,
  deleteRegistrations,
} from "../services/registrations.services";
import { response } from "../../common/response";

export const getItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await getRegistration(id);

    response.success(res, 200, `Registration ${id} data!`, result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const result = await getRegistrations();

    response.success(res, 200, "List of registrations!", result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const result = await createRegistrations(body);

    response.success(res, 201, "Registration created!", result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const result = await updateRegistrations(id, body);

    response.success(res, 200, `Registration ${id} updated!`, result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await deleteRegistrations(id);

    response.success(res, 204, `Registration ${id} deleted!`, result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
