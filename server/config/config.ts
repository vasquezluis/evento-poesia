import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const MONGO_URI = <string>process.env.MONGO_URI;

const JWT_SECRET = <string>process.env.JWT_SECRET

export { PORT, MONGO_URI, JWT_SECRET };
