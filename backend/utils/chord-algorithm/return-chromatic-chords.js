import { chromaticKeys } from "./notes-in-keys.js";
export const getChromaticChords = (number, key) => {
  // console.log(`key ${key}`);
  // console.log(`number ${JSON.stringify(number)}`);

  // Array that holds the chord symbols for each key
  let progression;
  let majorMinor;
  let individualKeyData = [];

  const loopThroughAllKeys = chromaticKeys.forEach((keyObject) => {
    if (keyObject.key !== key) {
      return;
    }
    const chordsInKey = keyObject.notesInKey;
    // Grab the appropriate index
    progression = chordsInKey[number.index];

    // Check if number.numeral is major, minor, or diminished
    const numeralToLowerCase = number.numeral.toLowerCase();
    if (numeralToLowerCase !== number.numeral) {
      majorMinor = "";
    } else if (number.numeral.includes("°")) {
      majorMinor = "°";
    } else {
      majorMinor = "-";
    }

    const combine = `${progression}${majorMinor}`;

    individualKeyData.push(combine);
  });

  // console.log({ key: key, numerals: individualKeyData });

  return [individualKeyData];
};

// Return what the exact chord would be for each key
