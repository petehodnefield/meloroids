import { majorKeys, minorKeys, chromaticKeys } from "./notes-in-keys.js";
import { getChromaticChords } from "./return-chromatic-chords.js";
export const returnMinorKey = async ([...numbers], oogaBooga) => {
  let keyNumeralsData = [];
  console.log(`ooga ${JSON.stringify(oogaBooga)}`);
  const loopThroughAllKeys = minorKeys.forEach((keyObject) => {
    let individualKeyData = [];
    //   Get the notes from the filtered key
    const chordsInKey = keyObject.notesInKey;
    //   Loop through the indexes to return the proper chords in the progression
    const getNumerals = numbers.forEach((number) => {
      let majorMinor;
      const progressions = chordsInKey[number - 1];
      // Checks the index to see if it's a major or minor chord
      switch (number) {
        case 1:
          majorMinor = "-";
          break;
        case 2:
          majorMinor = "-";
          break;
        case 3:
          majorMinor = "";
          break;
        case 4:
          majorMinor = "-";
          break;
        case 5:
          majorMinor = "-";
          break;
        case 6:
          majorMinor = "";
          break;
        case 7:
          majorMinor = "";
          break;
      }
      // Combine note with major or minor notation
      const combine = `${progressions}${majorMinor}`;

      //   Push the numerals to an array to store all numerals for the key
      individualKeyData.push(combine);
    });
    // Push the individual keys to the array that holds all keys
    keyNumeralsData.push({ key: keyObject.key, numerals: individualKeyData });
  });
  return await keyNumeralsData;
};
