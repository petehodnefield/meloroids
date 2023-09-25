import { majorKeys } from "./notes-in-keys.js";
import { getChromaticChords } from "./return-chromatic-chords.js";

export const returnMajorKey = async ([...numbers]) => {
  let keyNumeralsData = [];
  const loopThroughAllKeys = majorKeys.forEach((keyObject) => {
    let individualKeyData = [];

    //   Get the notes from the filtered key
    const chordsInKey = keyObject.notesInKey;

    //   Loop through the indexes to return the proper chords in the progression
    const getNumerals = numbers.forEach((number) => {
      let majorMinor;

      // Grab the appropriate index from all the notes in each key
      let progressions;

      // Variable to store our combined progression + majorMinor
      let combine;

      // Check whether the chord is diatonic or not
      if (!number.is_diatonic) {
        // If the chord ISN'T diatonic, we need to run the
        // chromatic function to figure out the proper index + chord
        combine = getChromaticChords(number).join("");
      } else {
        progressions = chordsInKey[number.index - 1];

        // Checks the index to see if it's a major or minor chord
        switch ((number.index, number.numeral)) {
          case (1, "I"):
            majorMinor = "";
            break;
          case (2, "ii"):
            majorMinor = "-";
            break;
          case (3, "iii"):
            majorMinor = "-";
            break;
          case (4, "IV"):
            majorMinor = "";
            break;
          case (4, "iv"):
            majorMinor = "-";
            break;
          case (5, "V"):
            majorMinor = "";
            break;
          case (6, "vi"):
            majorMinor = "-";
            break;
          case (7, "bVII"):
            majorMinor = "";
            break;
          case (7, "vii"):
            majorMinor = "-";
            break;
        }
        combine = `${progressions}${majorMinor}`;
      }

      //   Push the numerals to an array to store all numerals for the key
      individualKeyData.push(combine);
    });

    // Push the individual keys to the array that holds all keys
    keyNumeralsData.push({ key: keyObject.key, numerals: individualKeyData });
  });

  return keyNumeralsData;
};
