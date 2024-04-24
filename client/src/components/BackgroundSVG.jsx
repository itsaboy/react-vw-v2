import background from "../assets/background.svg";

export default function BackgroundSVG() {
  return (
    <div
      className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
      style={{ backgroundImage: `url(${background})` }}
    />
  );
}
