import LoopFileName from "@/components/Target/LoopFileName";
import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../_app";
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
import Loading from "../../components/Loading/LoadingWhiteText";
const QuickieDemo = () => {
  const [loopName, setLoopName] = useState(randomWord);
  const [includeDate, setIncludeDate] = useState(false);
  const [getRandomWord, setGetRandomWord] = useState(randomWord);
  const [randomProducer, setRandomProducer] = useState("murdabeatz");
  const { loading, error, data } = useQuery(ME);
  const bigProducers = [
    "murdabeatz",
    "wheezy",
    "nickmira",
    "rickrubin",
    "pharrellwilliams",
    "louisbell",
    "ryantedder",
    "maxmartin",
    "timbaland",
    "mustard",
    "diplo",
    "liljon",
    "swizzbeatz",
    "drdre",
    "metroboomin",
    "madlib",
    "bennyblanco",
    "boi1da",
    "wondagurl",
  ];

  useEffect(() => {
    const randomBigProducerIndex = Math.floor(
      Math.random() * bigProducers.length
    );

    const randomBigProducer = `@${bigProducers[randomBigProducerIndex]}`;
    setRandomProducer(randomBigProducer);
  }, []);
  useEffect(() => {
    if (data) {
      setLoopName(`${getRandomWord} ${randomProducer}`);
    }
  }, [data]);
  useEffect(() => {
    if (includeDate && data) {
      setLoopName(`${getRandomWord}  ${randomProducer} ${formattedToday}`);
    } else if (data) {
      setLoopName(`${getRandomWord}  ${randomProducer}`);
    }
  }, [includeDate]);

  // gives you your current date
  const today = new Date();
  const yyyy = today.getFullYear().toString().substr(-2);
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  const formattedToday = mm + "/" + dd + "/" + yyyy;

  if (loading) return <Loading />;

  return (
    <div className="quickie h-screen flex flex-col items-center py-12 px-6 md:px-0 relative">
      <Image
        src={background}
        priority
        alt="A music studio with an imac at the center"
        className="bg__quickie absolute top-0 h-full object-cover z-0 w-full"
      />
      <div className="flex flex-col items-center justify-between	 bg-white shadow-3xl pt-10 rounded-4xl w-full md:w-96 relative mb-6">
        <h2 className="text-2.5 font-semibold mb-6 md:mb-4 text-primary">
          Quickie (Demo)
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
              `${newRandomWord} ${randomProducer}
              ${includeDate ? formattedToday : ""}`
            );
            setGetRandomWord(newRandomWord);
          }}
        />

        <LoopFileName loopName={loopName} />
      </div>
      <Link
        className="relative bg-primary h-12 flex items-center w-48 justify-center text-1 text-white font-semibold rounded-lg"
        href={"/signup"}
      >
        Create an account
      </Link>
    </div>
  );
};

export default QuickieDemo;
