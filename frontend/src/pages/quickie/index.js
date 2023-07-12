import LoopFileName from "@/components/Train/LoopFileName";
import React, { useEffect, useState } from "react";
import { randomWord } from "../../../utils/data/words";
import { DateToggle } from "../../components/Quickie/DateToggle";
import { useQuery } from "@apollo/client";
import { ME } from "../../../utils/queries";
import { words } from "../../../utils/data/words";
import Link from "next/link";
import { Icon } from "@iconify/react";
import background from "../../../public/assets/images/music-studio.png";
import Image from "next/image";
import Auth from "utils/auth";
import Login from "../login";
const Quickie = () => {
  // if (!Auth.loggedIn()) {
  //   return <Login />;
  // }

  const [hydrated, setHydrated] = useState(false);
  const [loopName, setLoopName] = useState(randomWord);
  const [includeDate, setIncludeDate] = useState(false);
  const [getRandomWord, setGetRandomWord] = useState(randomWord);
  const [date, setDate] = useState();

  // gives you your current date
  const today = new Date();
  const yyyy = today.getFullYear().toString().substr(-2);
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  const formattedToday = mm + "/" + dd + "/" + yyyy;
  const { loading, error, data } = useQuery(ME);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (data) {
      setLoopName(`${getRandomWord} @${data.me.instagramHandle}`);
    }
  }, [data]);
  useEffect(() => {
    if (includeDate && data) {
      setLoopName(
        `${getRandomWord} @${data.me.instagramHandle} ${formattedToday}`
      );
    } else if (data) {
      setLoopName(`${getRandomWord} @${data.me.instagramHandle}`);
    }
  }, [includeDate]);
  if (loading) return <div>Loading....</div>;

  if (!hydrated) return null;

  const chooseNewWord = async () => {
    const splitWords = await words.split(`\n`);
    const randomIndex = await Math.floor(Math.random() * splitWords.length);
    return splitWords[randomIndex];
  };

  return (
    <div className="quickie h-screen flex flex-col items-center py-12 px-6 md:px-0 relative">
      <Image
        src={background}
        priority
        alt="A music studio with an imac at the center"
        className="bg__quickie absolute top-0 h-full object-cover z-0 w-full"
      />
      <div className="flex flex-col items-center justify-between	 bg-white shadow-3xl pt-10 rounded-4xl w-full md:w-96 relative">
        <h2 className="text-2.5 font-semibold mb-6 md:mb-4 text-primary">
          Quickie
        </h2>

        <DateToggle includeDate={includeDate} setIncludeDate={setIncludeDate} />

        <Icon
          className=" text-2 hover:cursor-pointer mb-6 md:mb-4 hover:opacity-80"
          icon="mdi:dice-6"
          onClick={() => {
            const splitWords = words.split(`\n`);
            const randomIndex = Math.floor(Math.random() * splitWords.length);
            const newRandomWord = splitWords[randomIndex];
            setLoopName(
              `${newRandomWord} @${data.me.instagramHandle}
              ${includeDate ? formattedToday : ""}`
            );
            setGetRandomWord(newRandomWord);
          }}
        />

        <LoopFileName loopName={loopName} />
      </div>
    </div>
  );
};

export default Quickie;
