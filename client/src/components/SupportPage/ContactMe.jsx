import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { contactMe } from "../../data/contactMe.js";

export default function ContactMe({ contactMeOpen, setContactMeOpen }) {
  return (
    <Transition.Root show={contactMeOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setContactMeOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-gray-500 text-gray-400 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => setContactMeOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <EnvelopeIcon
                      className="h-6 w-6 text-red-800"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-400"
                    >
                      Email
                    </Dialog.Title>
                    <div className="mt-2 grid grid-cols-1 border-t border-gray-100 pt-4">
                      {contactMe.map((email) => (
                        <p
                          key={email.id}
                          className="text-sm font-semibold leading-6 text-red-200 hover:text-gray-300"
                        >
                          {email.email}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
