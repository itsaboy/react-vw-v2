import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
