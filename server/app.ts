import express from "express";
import cors from "cors";
import morgan from "morgan";

import indexRoutes from "./api/routes/index";
import registrationsRoutes from "./api/routes/registrations.routes";
import usersRoutes from "./api/routes/users.routes";
import authRoutes from "./api/routes/auth.routes";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(morgan("dev"));

app.use(indexRoutes);
app.use(registrationsRoutes);
app.use(usersRoutes);
app.use(authRoutes);

export default app;
