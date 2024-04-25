import { useEffect, useContext, useState } from "react";
import PreviousVersions from "../components/DownloadPage/PreviousVersions";
import ChangeLog from "../components/ChangeLog";
import { AppContext } from "../context/AppContext";
import { downloads } from "../data/downloads";
import image from "../assets/void-rogue.webp";

export default function DownloadPage() {
  const [previousVersionOpen, setPreviousVersionOpen] = useState(false);
  const [changeLogOpen, setChangeLogOpen] = useState(false);

  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Downloads");
  }, [currentPage]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <h2 className="font-medieval text-3xl font-bold tracking-tight text-gray-400 sm:text-6xl">
            Downloads
          </h2>
          <p className="mt-12 text-xl leading-8 text-gray-200">
            Prepare to step into the void, where darkness and light converge.
            Void Warrior awaits. Are you ready to forge your legend?
          </p>
          <img
            src={image}
            alt="A rogue assassin in space"
            className="mt-16 aspect-[6/5] w-full rounded-2xl object-cover lg:aspect-auto lg:h-[34.5rem] shadow-lg shadow-blue-600/60 transition duration-300 hover:ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/80 bg-gray-900"
          />
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto">
          <h3 className="sr-only">Download section</h3>
          <ul className="-my-8 divide-y divide-gray-100">
            {downloads.map((data) => (
              <li key={data.id} className="py-8">
                <dl className="relative flex flex-wrap gap-x-3">
                  <dt className="sr-only">Platform</dt>
                  <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-200">
                    <a
                      href={data.href}
                      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Download
                    </a>
                  </dd>
                  <dt className="sr-only">Windows</dt>
                  <dd className="mt-4 w-full flex-none text-base leading-7 text-gray-400">
                    Last update: {data.date}
                  </dd>
                  <dt className="sr-only">Apple</dt>
                  <dd className="mt-4 text-base font-semibold leading-7 text-gray-200">
                    {data.version}
                  </dd>
                  <dt className="sr-only">Linux</dt>
                  <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                    <svg
                      viewBox="0 0 2 2"
                      className="h-0.5 w-0.5 flex-none fill-gray-300"
                      aria-hidden="true"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    {data.platform}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-evenly border-t border-gray-100 pt-8">
            <button
              onClick={() => setPreviousVersionOpen(true)}
              className="text-sm font-semibold leading-6 text-red-200 hover:text-red-400"
            >
              Previous versions <span aria-hidden="true">&rarr;</span>
            </button>
            <button
              onClick={() => setChangeLogOpen(true)}
              className="text-sm font-semibold leading-6 text-red-200 hover:text-red-400"
            >
              Changelog <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <PreviousVersions
        previousVersionOpen={previousVersionOpen}
        setPreviousVersionOpen={setPreviousVersionOpen}
      />
      <ChangeLog
        changeLogOpen={changeLogOpen}
        setChangeLogOpen={setChangeLogOpen}
      />
    </div>
  );
}
