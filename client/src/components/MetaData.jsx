import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../context/AppContext";

export default function MetaData() {
  const { currentPage } = useContext(AppContext);

  return (
    <Helmet>
      {currentPage === "Home" ? (
        <>
          <title>Home | Void Warrior | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="Embark on an epic journey through shadows and light in Void Warrior, a mesmerizing turn-based 2D JRPG created using the Godot Engine. Set in the mystical realms of darkness and the ethereal planes of existence, Void Warrior invites players to explore a richly woven tapestry of lore, where every choice ignites the path to your destiny."
          />
          <link rel="canonical" href="https://voidwarrior.com/" />
        </>
      ) : currentPage === "Info" ? (
        <>
          <title>Info | Void Warrior | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="In Void Warrior you are the last beacon of hope in a world teetering on the brink of oblivion. It's your destiny to confront the creeping void that threatens to consume all. Engage in strategic turn-based combat that challenges your tactical acumen, with mechanics that are both deeply engaging and accessible to newcomers."
          />
          <link rel="canonical" href="https://voidwarrior.com/info" />
        </>
      ) : currentPage === "Support" ? (
        <>
          <title>Support | Void Warrior | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="We strive to provide a seamless and enjoyable journey, but we understand that sometimes things don't go as planned. Whether it's a technical glitch, have a question, or specifics on system requirements, you'll find everything you need right here."
          />
          <link rel="canonical" href="https://voidwarrior.com/support" />
        </>
      ) : currentPage === "Downloads" ? (
        <>
          <title>Downloads | Void Warrior | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="Prepare to step into the void, where darkness and light converge. Void Warrior awaits. Are you ready to forge your legend?"
          />
          <link rel="canonical" href="https://voidwarrior.com/downloads" />
        </>
      ) : null}
    </Helmet>
  );
}
