import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function Feedback({ text, clear }) {
  return (
    <div className="rounded-md bg-blue-100 px-3 py-2">
      <div className="flex">
        <div className="ml-3">
          <p className="text-sm font-medium text-blue-600">{text}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-blue-100 p-1.5 text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50"
              onClick={() => clear("")}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
