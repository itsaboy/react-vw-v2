import { useState } from "react";
import { BugAntIcon } from "@heroicons/react/24/outline";

export default function BugReport() {
  const [bugReport, setBugReport] = useState({
    report: "",
  });

  const [bugReported, setBugReported] = useState(false);

  function handleInput(event) {
    setBugReport((previousInput) => {
      return {
        ...previousInput,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    reportBug(bugReport);
    setBugReported(true);
    setBugReport({});
  }

  const reportBug = async (input) => {
    // const req = `https://voidwarrior.com/report?time=${input.time}&report=${input.report}`;
    // const res = await fetch(req);

    // if (res.status === 200) {
    //   return;
    // } else {
    //   bugReported(false);
    // }
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <BugAntIcon className="h-8 w-8 text-blue-400" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#" className="relative" onSubmit={handleSubmit}>
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-red-400 focus-within:ring-2 focus-within:ring-blue-500">
            <label htmlFor="report" className="sr-only">
              Report a bug
            </label>
            <textarea
              rows={3}
              name="report"
              id="report"
              placeholder="Report a bug..."
              defaultValue={""}
              onChange={handleInput}
              {...(bugReported ? { readOnly: true } : null)}
              {...(bugReported
                ? {
                    className:
                      "block w-full resize-none border-0 bg-transparent py-1.5 px-2 text-red-200 sm:text-sm sm:leading-6",
                  }
                : {
                    className:
                      "block w-full resize-none border-0 bg-transparent py-1.5 px-2 text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
                  })}
            />

            <div className="py-2" aria-hidden="true">
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex-shrink-0">
              {bugReported ? (
                <p className="px-3 py-2 text-sm font-semibold text-blue-300">
                  Your report has been sent!
                </p>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}