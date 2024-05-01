import { useState, useCallback } from "react";

export const useReportBug = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const reportBug = useCallback(async (bugReport) => {
    setLoading(true);
    try {
      const req = "/api/bugReport/create";
      const res = await fetch(req, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bugReport),
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(data.message);
      } else {
        setMessage("Submission failed!");
      }
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    message,
    setMessage,
    loading,
    setLoading,
    reportBug,
  };
};
