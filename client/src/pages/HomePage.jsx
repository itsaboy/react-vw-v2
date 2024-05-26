import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ChangeLog from "../components/ChangeLog";
import { AppContext } from "../context/AppContext";
import image from "../assets/void-knight.webp";

export default function HomePage() {
  const [changeLogOpen, setChangeLogOpen] = useState(false);

  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Home");
  }, [currentPage]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <h1 className="font-medieval max-w-2xl text-6xl font-bold tracking-tight text-gray-400 sm:text-9xl lg:col-span-2 xl:col-auto">
          Void Warrior
        </h1>
        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p className="text-lg leading-8 text-gray-200">
            Embark on an epic journey through shadows and light in Void Warrior,
            a mesmerizing turn-based 2D JRPG created using the Godot Engine. Set
            in the mystical realms of darkness and the ethereal planes of
            existence, Void Warrior invites players to explore a richly woven
            tapestry of lore, where every choice ignites the path to your
            destiny.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/downloads"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-gray-50 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Downloads
            </Link>
            <a
              href="https://youtu.be/iemdbQDlYWY"
              target="_blank"
              className="text-sm font-semibold leading-6 text-gray-400 hover:text-blue-300"
            >
              Video preview <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <img
          src={image}
          alt="a knight in space"
          className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 shadow-lg shadow-blue-900/60 transition duration-300 hover:ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/80 bg-gray-900"
        />
      </div>
      <ChangeLog
        changeLogOpen={changeLogOpen}
        setChangeLogOpen={setChangeLogOpen}
      />
    </div>
  );
}
