import { BugReport } from "../models/bugReportModel.js";

export const createBugReport = async (req, res) => {
  console.log(req.body);
  const { report } = req.body;

  try {
    const bugReport = new BugReport({
      report,
    });

    await bugReport.save();
    res.status(201).json({ message: "Submission successful!", bugReport });
  } catch (error) {
    console.error("Error creating bug report:", error);
    res.status(500).json({ message: "Submission failed!" });
  }
};
