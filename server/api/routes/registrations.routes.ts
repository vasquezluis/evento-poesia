import { Router } from "express";
import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/registrations.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const router = Router();

router.get("/api/v1/registrations", verifyToken, getItems);
router.get("/api/v1/registrations/:id", verifyToken, getItem);
router.post("/api/v1/registrations", createItem);
router.put("/api/v1/registrations/:id", verifyToken, updateItem);
router.delete("/api/v1/registrations/:id", verifyToken, deleteItem);

export default router;
