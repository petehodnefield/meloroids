import LoopFileName from "@/components/Train/LoopFileName";
import React, { useEffect, useState } from "react";
import { randomWord } from "../../../utils/data/words";
import { DateToggle } from "../../components/Quickie/DateToggle";
import Link from "next/link";
import { Icon } from "@iconify/react";
import background from "../../../public/assets/images/music-studio.png";
import Image from "next/image";
import Auth from "utils/auth";
import Login from "../login";
const Quickie = () => {
  const [hydrated, setHydrated] = useState(false);
  const [loopName, setLoopName] = useState("");
  const [includeDate, setIncludeDate] = useState(false);
  const [date, setDate] = useState();

  // gives you your current date
  const today = new Date();
  const yyyy = today.getFullYear().toString().substr(-2);
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  const formattedToday = mm + "/" + dd + "/" + yyyy;

  useEffect(() => {
    setHydrated(true);

    setLoopName(`${randomWord} @mongamonga_`);
    // setDate(formattedToday);
  }, []);
  useEffect(() => {
    if (includeDate) {
      setLoopName(`${randomWord} @mongamonga_ ${formattedToday}`);
    } else {
      setLoopName(`${randomWord} @mongamonga_`);
    }
  }, [includeDate]);

  if (!hydrated) return null;

  // if (!Auth.loggedIn()) {
  //   return <Login />;
  // }

  return (
    <div className="quickie h-screen flex flex-col items-center py-12 relative">
      <Image
        src={background}
        alt="A music studio with an imac at the center"
        className="bg__quickie absolute top-0 h-full object-cover z-0 w-full"
      />
      <div className="flex flex-col items-center justify-between	 bg-white shadow-3xl pt-10 rounded-4xl w-96 relative">
        <h2 className="text-2.5 font-semibold mb-4 text-primary">Quickie</h2>

        <DateToggle includeDate={includeDate} setIncludeDate={setIncludeDate} />

        <Link onClick={() => window.location.reload()} href="/quickie">
          <Icon
            className=" text-2 hover:cursor-pointer mb-4 hover:opacity-80"
            icon="mdi:dice-6"
          />
        </Link>
        <LoopFileName loopName={loopName} />
      </div>
    </div>
  );
};

export default Quickie;
