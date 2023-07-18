import React, { useState, useEffect } from "react";
import { tempos } from "../../../utils/data/tempos";
const TempoInput = ({
  setMelodyParams,
  melodyParams,
  hoverStyle,
  handleChange,
  checkboxChecked,
}) => {
  const [tempoOpen, setTempoOpen] = useState(false);

  function handleNumberChange(e) {
    const tempo = parseInt(e.target.value);
    setMelodyParams({
      ...melodyParams,
      tempo: tempo,
    });
  }
  const generateTempo = (number) => {
    const minValue = number.min;
    const maxValue = number.max;
    const randomNumber = Math.floor(
      Math.random() * (maxValue - minValue) + minValue
    );
    setMelodyParams({
      ...melodyParams,
      tempo: randomNumber,
    });
  };
  return (
    <div className="relative flex items-center gap-2 mb-6 w-full">
      <div className="w-full flex flex-col items-start">
        <label className="text-0.875 font-semibold">Tempo</label>
        <div
          className={`h-12 w-full border-2 rounded-lg flex justify-between items-center 
              `}
          onClick={() => setTempoOpen(!tempoOpen)}
        >
          <div className="w-12 text-center">🕛</div>
          <p className="text-left w-full text-0.875 font-semibold">
            {melodyParams.tempo}
          </p>
          <div className="w-12 h-12 flex items-center justify-center"> ⌄</div>
        </div>
      </div>
      {tempoOpen ? (
        <div className="border-2 rounded-lg absolute top-16 w-full mt-3 menu-dropdown bg-white z-30 max-h-14 overflow-scroll">
          {tempos.map((tempo) => (
            <div
              key={tempo.range}
              className={`h-12  text-dark  flex justify-between items-center rounded-lg ${hoverStyle}`}
              onClick={() => {
                generateTempo(tempo);

                setTempoOpen(!tempoOpen);
              }}
            >
              <div className="w-12 text-center">🎶</div>
              <p className="text-left w-full text-0.875 font-semibold">
                {tempo.range}
              </p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {/* Custom Checkbox */}
      {/* NEW NEW */}
    </div>
  );
};

export default TempoInput;
