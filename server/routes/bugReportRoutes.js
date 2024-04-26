import express from "express";
import { createBugReport } from "../controllers/bugReportController.js";

export const bugReportRouter = express.Router();

bugReportRouter.post("/create", createBugReport);