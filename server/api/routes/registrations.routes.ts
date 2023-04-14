import { Router } from "express";
import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/registrations.controllers";

const router = Router();

router.get("/api/v1/registrations", getItems);
router.get("/api/v1/registrations/:id", getItem);
router.post("/api/v1/registrations", createItem);
router.put("/api/v1/registrations/:id", updateItem);
router.delete("/api/v1/registrations/:id", deleteItem);

export default router;
