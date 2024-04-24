import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import background from "../assets/space.svg";
import Footer from "../components/Footer/Footer";

export default function BodyLayout() {
  return (
    <div className="flex flex-col min-h-screen h-full relative isolate">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${background})` }}
      />
      <Header />
      <main className="flex-grow bg-transparent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
