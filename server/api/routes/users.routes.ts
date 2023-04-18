import { Request, Router, Response } from "express";
import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
  loginController,
} from "../controllers/users.controllers";

const router = Router();

router.post("/api/v1/users/login", loginController);

router.get("/api/v1/users", getItems);
router.get("/api/v1/users/:id", getItem);
router.post("/api/v1/users", createItem);
router.put("/api/v1/users/:id", updateItem);
router.delete("/api/v1/users/:id", deleteItem);


export default router;
