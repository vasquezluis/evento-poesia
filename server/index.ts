import { PORT } from "./config/config";
import dbConnect from "./config/mongodb";
import app from "./app";

dbConnect().then(() => {
  console.log("database connected");
});

app.listen(PORT, () => {
  console.log("server listening on port: ", PORT);
});
