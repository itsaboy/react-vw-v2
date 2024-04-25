import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import background from "../assets/space.svg";
import Footer from "../components/Footer/Footer";

export default function BodyLayout() {
  return (
    <div className="flex flex-col min-h-screen h-full relative isolate overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div
        className="absolute inset-y-0 right-1/4 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-45deg] bg-gradient-to-b from-red-800/40 to-transparent shadow-xl sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <Header />
      <main className="flex-grow bg-transparent relative isolate overflow-hidden pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
