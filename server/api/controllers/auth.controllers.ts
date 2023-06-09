import jwt from "jsonwebtoken";
import { loginService } from "../services/auth.services";
import { Request, Response } from "express";
import { JWT_SECRET } from "../../config/config";
// import dotenv from "dotenv";
// dotenv.config();

// const JWT_SECRET = <string>process.env.JWT_SECREET;

export const loginController = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  const expirationTime = "1d";

  try {
    const result = await loginService(user);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    } else {
      if (password !== result.password) {
        return res.status(401).json({ message: "Incorrect password" });
      }
    }

    const userData = {
      id: result._id,
      user: result.user,
      roles: result.roles,
      permissions: result.permissions,
    };

    jwt.sign(
      userData,
      JWT_SECRET,
      { expiresIn: expirationTime },
      (error, token) => {
        if (error) {
          console.log(error.message);
          return res.status(500).json({ message: "Error creating token" });
        }
        return res.json({
          message: "authData",
          token: token,
          expiration: `Expires in ${expirationTime} from now`,
          userData,
        });
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json({ message: "Server error" });
    }
  }
};
