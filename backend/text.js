import {
  majorKeys,
  minorKeys,
  chromaticKeys,
} from "./utils/chord-algorithm/notes-in-keys.js";
import { returnMinorKey } from "./utils/chord-algorithm/return-minor-key.js";
import { returnMajorKey } from "./utils/chord-algorithm/return-major-key.js";

// How do we account for chords that aren't in the key?
// Boolean that says diatonic?

async function generateProgressionsInAllKeys(oogaBooga) {
  async function createProgression(data) {
    let allKeys = [];
    const loopThroughKeys = await data.forEach((key) => {
      allKeys.push({
        key: key.key,
        progression_in_key: key.numerals.join(" "),
      });
    });
    console.log("allKeys", allKeys);
  }
  let numeralsToNumbers = [];
  const splitNumerals = oogaBooga.numerals.split(" ");
  const getChordIndexes = await splitNumerals.forEach(
    (numeral, index, array) => {
      // Check to see if it's a major key or a minor key
      if (oogaBooga.is_major) {
        switch (numeral) {
          case "I":
            numeralsToNumbers.push({
              index: 1,
              numeral: "I",
              is_diatonic: true,
            });
            break;
          case "ii":
            numeralsToNumbers.push({
              index: 2,
              numeral: "ii",
              is_diatonic: true,
            });
            break;
          case "iii":
            numeralsToNumbers.push({
              index: 3,
              numeral: "iii",
              is_diatonic: true,
            });
            break;
          case "IV":
            numeralsToNumbers.push({
              index: 4,
              numeral: "IV",
              is_diatonic: true,
            });
            break;
          // Minor 4 Chord
          case "iv":
            numeralsToNumbers.push({
              index: 5,
              numeral: "iv",
              is_diatonic: false,
            });
            break;
          case "V":
            numeralsToNumbers.push({
              index: 5,
              numeral: "V",
              is_diatonic: true,
            });
            break;
          case "vi":
            numeralsToNumbers.push({
              index: 6,
              numeral: "vi",
              is_diatonic: true,
            });
            break;
          // Flat 7 Chord (Mixolydian)
          case "bVII":
            numeralsToNumbers.push({
              index: 10,
              numeral: "bVII",
              is_diatonic: false,
            });
            break;
          case "vii":
            numeralsToNumbers.push({
              index: 7,
              numeral: "vii",
              is_diatonic: true,
            });
            break;
          default:
            console.log(false);
        }
        if (index === array.length - 1) {
          const results = returnMajorKey(numeralsToNumbers).then((data) => {
            createProgression(data);
            return data;
          });
        }
      } else {
        switch (numeral) {
          case "i":
            numeralsToNumbers.push(1);
            break;
          case "ii":
            numeralsToNumbers.push(2);
            break;
          case "bIII":
            numeralsToNumbers.push(3);
            break;
          case "iv":
            numeralsToNumbers.push(4);
            break;
          case "v":
            numeralsToNumbers.push(5);
            break;
          case "bVI":
            numeralsToNumbers.push(6);
            break;
          case "bVII":
            numeralsToNumbers.push(7);
            break;
          default:
            console.log(false);
        }
        if (index === array.length - 1) {
          const results = returnMinorKey(numeralsToNumbers).then((data) =>
            createProgression(data)
          );
        }
      }
    }
  );
}

generateProgressionsInAllKeys({
  numerals: "I bVII IV iv bVII",
  is_major: true,
});
