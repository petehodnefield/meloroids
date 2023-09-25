import { chromaticKeys } from "./notes-in-keys.js";
export const getChromaticChords = (number) => {
  // This function needs to return the proper index from the chromatic scales
  let keyNumeralsData = [];
  let progression;
  let majorMinor;

  const loopThroughAllKeys = chromaticKeys.forEach((keyObject) => {
    let individualKeyData = [];
    const chordsInKey = keyObject.notesInKey;
    // Grab the appropriate index
    progression = chordsInKey[number.index];

    // Check if number.numeral is major or minor
    const numeralToLowerCase = number.numeral.toLowerCase();
    if (numeralToLowerCase !== number.numeral) {
      majorMinor = "";
    } else {
      majorMinor = "-";
    }

    const combine = `${progression}${majorMinor}`;
    keyNumeralsData.push(combine);
  });

  return [progression, majorMinor];
};
