import express from "express";
import cors from "cors";
import morgan from "morgan";

import indexRoutes from "./api/routes/index";
import registrationsRoutes from "./api/routes/registrations.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(indexRoutes);
app.use(registrationsRoutes);

export default app;
