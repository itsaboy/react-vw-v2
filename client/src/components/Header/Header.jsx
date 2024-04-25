import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MobileNav from "./MobileNav.jsx";
import logo from "../../assets/logo.svg";
import { AppContext } from "../../context/AppContext";
import { navigation } from "../../data/navigation.js";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { currentPage } = useContext(AppContext);

  return (
    <header className="bg-transparent">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 text-gray-200 rounded-lg ${
                  currentPage === item.name
                    ? "animate-pulse hover:cursor-default"
                    : "hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-12 w-auto" src={logo} alt="void warrior logo" />
        </div>
      </nav>
      <MobileNav open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  );
}
