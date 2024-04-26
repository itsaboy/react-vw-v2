import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bugReportSchema = new Schema({
  report: String,
  createdAt: { type: Date, default: Date.now },
});

export const BugReport = model("BugReport", bugReportSchema);
