import React, { useState, useEffect } from "react";

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

  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="flex flex-col items-center">
        <label className="text-0.875 font-semibold">Tempo</label>
        <input
          className={`text-0.875 font-semibold w-20  rounded-lg h-12 border-2 text-center focus:outline-primary
                       ${
                         checkboxChecked.tempoRandom
                           ? "pointer-events-none bg-medium opacity-40"
                           : ""
                       }`}
          defaultValue={60}
          type="number"
          min="60"
          max="200"
          onChange={(e) => handleNumberChange(e)}
        />
      </div>
      {/* Custom Checkbox */}
    </div>
  );
};

export default TempoInput;
