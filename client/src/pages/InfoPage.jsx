import { useEffect, useContext, useState } from "react";
import {
  FolderArrowDownIcon,
  CursorArrowRippleIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import Install from "../components/InfoPage/Install";
import Controls from "../components/InfoPage/Controls";
import Roadmap from "../components/InfoPage/Roadmap";
import { AppContext } from "../context/AppContext";
import image from "../assets/void-barb.webp";

export default function InfoPage() {
  const [installOpen, setInstallOpen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false);

  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Info");
  }, [currentPage]);

  return (
    <div className="pt-8 sm:pt-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 text-gray-700">
          <h1 className="font-medieval max-w-2xl text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl lg:col-span-2 xl:col-auto">
            Information
          </h1>
          <div className="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="mt-6 text-xl leading-8 text-gray-200">
              In Void Warrior you are the last beacon of hope in a world
              teetering on the brink of oblivion. It's your destiny to confront
              the creeping void that threatens to consume all. Engage in
              strategic turn-based combat that challenges your tactical acumen,
              with mechanics that are both deeply engaging and accessible to
              newcomers.
            </p>
            <div className="mt-10 max-w-2xl">
              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <FolderArrowDownIcon
                    className="mt-1 h-5 w-5 flex-none text-red-400"
                    aria-hidden="true"
                  />
                  <span>
                    <button
                      className="font-semibold text-blue-400"
                      onClick={() => setInstallOpen(true)}
                    >
                      Installation guide
                    </button>{" "}
                    Kickstart your adventure with our easy-to-follow
                    installation guide.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CursorArrowRippleIcon
                    className="mt-1 h-5 w-5 flex-none text-red-400"
                    aria-hidden="true"
                  />
                  <span>
                    <button
                      className="font-semibold text-blue-400"
                      onClick={() => setControlsOpen(true)}
                    >
                      Game controls
                    </button>{" "}
                    Master the controls and become a champion of our universe
                    with our comprehensive guide.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MapIcon
                    className="mt-1 h-5 w-5 flex-none text-red-400"
                    aria-hidden="true"
                  />
                  <span>
                    <button
                      className="font-semibold text-blue-400"
                      onClick={() => setRoadmapOpen(true)}
                    >
                      Roadmap info
                    </button>{" "}
                    Peek behind the curtain with our development roadmap
                    section, where we share our vision for the future of the
                    game.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <img
            className="place-self-end mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-12 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-8 shadow-lg shadow-red-600/60 transition duration-300 hover:ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-800/80 bg-gray-900"
            src={image}
            alt="A warrior in space"
          />
        </div>
        <Install installOpen={installOpen} setInstallOpen={setInstallOpen} />
        <Controls
          controlsOpen={controlsOpen}
          setControlsOpen={setControlsOpen}
        />
        <Roadmap roadmapOpen={roadmapOpen} setRoadmapOpen={setRoadmapOpen} />
      </div>
    </div>
  );
}
