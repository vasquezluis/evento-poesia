import { Request, Response } from "express";
import {
  getUser,
  getUsers,
  createUser,
  UpdateUser,
  deleteUser,
  login,
} from "../services/users.services";
import { response } from "../../common/response";

export const getItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await getUser(id);

    response.success(res, 200, `User ${id} data!`, result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const result = await getUsers();

    response.success(res, 200, "List of users!", result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const result = await createUser(body);

    response.success(res, 201, "User created!", result);
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

    const result = await UpdateUser(id, body);

    response.success(res, 200, `User ${id} updated!`, result);
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

    const result = await deleteUser(id);

    response.success(res, 204, `User ${id} deleted!`, result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

// export const loginController = async (req: Request, res: Response) => {
//   try {
//     const { body } = req;
//     console.log(body)
//     const result = await login(body);

//     response.success(res, 200, `User data!`, result);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   }
// };
