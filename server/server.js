import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import * as url from "url";
import mongoose from "mongoose";
import { bugReportRouter } from "./routes/bugReportRoutes.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/api/bugReport", bugReportRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to DB, server running on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
