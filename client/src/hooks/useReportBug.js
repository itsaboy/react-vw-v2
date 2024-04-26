import { useState, useCallback } from "react";

export const useReportBug = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const reportBug = useCallback(async (bugReport) => {
    setLoading(true);
    console.log(bugReport);
    try {
      const res = await fetch("/api/bugReport/create", {
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
        setMessage(data.message);
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
