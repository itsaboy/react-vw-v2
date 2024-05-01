import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.svg";
import { navigation } from "../../data/navigation.js";

export default function MobileNav({open, setOpen}) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={open}
      onClose={setOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-gradient-to-br from-gray-950 to-red-950 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-1">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src={logo} alt="void warrior logo" />
          </div>
        </div>
        <div className="mt-6 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-300 hover:text-gray-950"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
