import { returnKey } from "./return-key.js";
// How do we account for chords that aren't in the key?
// Boolean that says diatonic?

async function generateProgressionsInAllKeys(enteredChordProgression) {
  async function createProgression(data) {
    let allKeys = [];
    const loopThroughKeys = await data.forEach((key) => {
      allKeys.push({
        key: key.key,
        progression_in_key: key.numerals.join(" "),
      });
    });
    // Logs all the data
    // console.log(`allKeys  ${JSON.stringify(allKeys)}`);
  }
  let numeralsToNumbers = [];
  const splitNumerals = enteredChordProgression.numerals.split(" ");
  const getChordIndexes = await splitNumerals.forEach(
    (numeral, index, array) => {
      // Check to see if it's a major key or a minor key
      if (enteredChordProgression.is_major) {
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
          case "vii°":
            numeralsToNumbers.push({
              index: 7,
              numeral: "vii°",
              is_diatonic: true,
            });
            break;
          default:
            console.log(false);
        }
        if (index === array.length - 1) {
          const results = returnKey(
            numeralsToNumbers,
            enteredChordProgression
          ).then((data) => {
            createProgression(data);
            return data;
          });
        }
      } else {
        switch (numeral) {
          case "i":
            numeralsToNumbers.push({
              index: 1,
              numeral: "i",
              is_diatonic: true,
            });
            break;
          case "ii°":
            numeralsToNumbers.push({
              index: 2,
              numeral: "ii°",
              is_diatonic: true,
            });
            break;
          case "bIII":
            numeralsToNumbers.push({
              index: 3,
              numeral: "bIII",
              is_diatonic: true,
            });
            break;
          case "iv":
            numeralsToNumbers.push({
              index: 4,
              numeral: "iv",
              is_diatonic: true,
            });
            break;
          case "v":
            numeralsToNumbers.push({
              index: 5,
              numeral: "v",
              is_diatonic: true,
            });
            break;
          case "V":
            numeralsToNumbers.push({
              index: 7,
              numeral: "V",
              is_diatonic: false,
            });
            break;
          case "bVI":
            numeralsToNumbers.push({
              index: 6,
              numeral: "bVI",
              is_diatonic: true,
            });
            break;
          case "bVII":
            numeralsToNumbers.push({
              index: 7,
              numeral: "bVII",
              is_diatonic: true,
            });
            break;
          default:
            console.log(false);
        }
        if (index === array.length - 1) {
          const results = returnKey(
            numeralsToNumbers,
            enteredChordProgression
          ).then((data) => createProgression(data));
        }
      }
    }
  );
}

generateProgressionsInAllKeys({
  numerals: "I vii° V",
  is_major: true,
});
