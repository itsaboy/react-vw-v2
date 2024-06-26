import { useEffect, useContext, useState } from "react";
import BugReport from "../components/SupportPage/BugReport";
import ContactMe from "../components/SupportPage/ContactMe";
import SysReq from "../components/SupportPage/SysReq";
import { AppContext } from "../context/AppContext";
import image from "../assets/void-king.webp";

export default function SupportPage() {
  const [contactMeOpen, setContactMeOpen] = useState(false);
  const [sysReqOpen, setSysReqOpen] = useState(false);

  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Support");
  }, [currentPage]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <h2 className="font-medieval text-3xl font-bold tracking-tight text-gray-400 sm:text-6xl">
            Support
          </h2>
          <p className="mt-12 text-xl leading-8 text-gray-200">
            We strive to provide a seamless and enjoyable journey, but we
            understand that sometimes things don't go as planned. Whether it's a
            technical glitch, have a question, or specifics on system
            requirements, you'll find everything you need right here.
          </p>
          <img
            src={image}
            alt="An old king in space"
            className="mt-16 aspect-[6/5] w-full rounded-2xl object-cover lg:aspect-auto lg:h-[34.5rem] shadow-lg shadow-blue-900/60 transition duration-300 hover:ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/80 bg-gray-950"
          />
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto">
          <h3 className="sr-only">Support section</h3>
          <BugReport />
          <div className="mt-8 flex border-t border-red-400 pt-8">
            <button
              onClick={() => setContactMeOpen(true)}
              className="text-sm font-semibold leading-6 text-gray-400 hover:text-blue-300"
            >
              Contact me <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
          <div className="mt-8 flex border-t border-red-400 pt-8">
            <button
              onClick={() => setSysReqOpen(true)}
              className="text-sm font-semibold leading-6 text-gray-400 hover:text-blue-300"
            >
              System Requirements <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <ContactMe
        contactMeOpen={contactMeOpen}
        setContactMeOpen={setContactMeOpen}
      />
      <SysReq sysReqOpen={sysReqOpen} setSysReqOpen={setSysReqOpen} />
    </div>
  );
}
