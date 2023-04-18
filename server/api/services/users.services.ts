import UserModel from "../models/users.model";

export const getUser = async (id: string) => {
  try {
    const response = await UserModel.findById(id);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getUsers = async () => {
  try {
    const response = await UserModel.find({});

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createUser = async (body: any) => {
  try {
    const newdata = { ...body, active: true };

    const response = await UserModel.create(newdata);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const UpdateUser = async (id: string, body: any) => {
  try {
    const response = await UserModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await UserModel.findByIdAndUpdate(
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

export const login = async (body: any) => {
  try {
    const response = await UserModel.findOne({ user: body.user });

    if (response) {
      if (response.password === body.password) {
        return response;
      }
    } else {
      return "forbidden";
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
