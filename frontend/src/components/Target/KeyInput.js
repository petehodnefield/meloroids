import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { MAJOR_KEYS, MINOR_KEYS } from "utils/queries";
import LoadingSimpleText from "../Loading/LoadingSimpleText";

const KeyInput = ({
  setMelodyParams,
  melodyParams,
  hoverStyle,
  handleChange,
  checkboxChecked,
}) => {
  const [keyOpen, setKeyOpen] = useState(false);

  const {
    loading: majorkeyLoading,
    data: majorkeyData,
    error: majorkeyError,
  } = useQuery(MAJOR_KEYS);
  const {
    loading: minorKeyLoading,
    data: minorKeyData,
    error: minorKeyError,
  } = useQuery(MINOR_KEYS);

  if (majorkeyLoading || minorKeyLoading) return <LoadingSimpleText />;

  return (
    <div className="w-full relative mb-6">
      <div className="flex justify-between items-center w-full">
        <label className="text-0.875 font-semibold">Key</label>
      </div>
      <div
        className={`h-12 w-full border-2 rounded-lg flex justify-between items-center 
                ${
                  checkboxChecked.keyRandom || !melodyParams.genre
                    ? "pointer-events-none bg-medium opacity-40"
                    : ""
                }`}
        onClick={() => setKeyOpen(!keyOpen)}
      >
        <div className="w-12 text-center">🎼</div>
        <p className="text-left w-full text-0.875 font-semibold">
          {melodyParams.key}{" "}
          {!melodyParams.key ? "" : melodyParams.is_major ? `Major` : `Minor`}
        </p>
        <div className="w-12 h-12 flex items-center justify-center"> ⌄</div>
      </div>
      {/* Style dropdown */}
      {keyOpen ? (
        <div className="border-2 rounded-lg absolute w-full mt-3 menu-dropdown bg-white z-10 max-h-14 overflow-scroll">
          {melodyParams.is_major
            ? majorkeyData.majorkeys.map((key) => (
                <div
                  key={key.key}
                  className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                  onClick={() => {
                    setMelodyParams({
                      ...melodyParams,
                      key: key.key,
                      keyId: key._id,
                    });
                    setKeyOpen(!keyOpen);
                  }}
                >
                  <div className="w-12 text-center">🎼</div>
                  <p className="text-left w-full text-0.875 font-semibold">
                    {key.key} Major
                  </p>
                </div>
              ))
            : minorKeyData.minorkeys.map((key) => (
                <div
                  key={key.key}
                  className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
                  onClick={() => {
                    setMelodyParams({
                      ...melodyParams,
                      key: key.key,
                      keyId: key._id,
                    });
                    setKeyOpen(!keyOpen);
                  }}
                >
                  <div className="w-12 text-center">🎼</div>
                  <p className="text-left w-full text-0.875 font-semibold">
                    {key.key} Minor
                  </p>
                </div>
              ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default KeyInput;
