// Major Keys
const majorKeys = [
  { key: "Ab", notesInKey: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"] },
  { key: "A", notesInKey: ["A", "B", "C#", "D", "E", "F#", "G#", "A"] },
  { key: "Bb", notesInKey: ["Bb", "C", "D", "Eb", "F", "G", "A"] },
  { key: "B", notesInKey: ["B", "C#", "D#", "E", "F#", "G#", "A#"] },
  { key: "Cb", notesInKey: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"] },
  { key: "C", notesInKey: ["C", "D", "E", "F", "G", "A", "B"] },
  { key: "C#", notesInKey: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"] },
  { key: "Db", notesInKey: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"] },
  { key: "D", notesInKey: ["D", "E", "F#", "G", "A", "B", "C#"] },
  { key: "Eb", notesInKey: ["Eb", "F", "G", "Ab", "Bb", "C", "D"] },
  { key: "E", notesInKey: ["E", "F#", "G#", "A", "B", "C#", "D#"] },
  { key: "F", notesInKey: ["F", "G", "A", "Bb", "C", "D", "E"] },
  { key: "F#", notesInKey: ["F#", "G#", "A#", "B", "C#", "D#", "E#"] },
  { key: "Gb", notesInKey: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"] },
  { key: "G", notesInKey: ["G", "A", "B", "C", "D", "E", "F#"] },
];
// Minor Keys
const minorKeys = [
  { key: "Ab", notesInKey: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"] },
  { key: "A", notesInKey: ["A", "B", "C", "D", "E", "F", "G"] },
  { key: "A#", notesInKey: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"] },
  { key: "Bb", notesInKey: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"] },
  { key: "B", notesInKey: ["B", "C#", "D", "E", "F#", "G", "A"] },
  { key: "C", notesInKey: ["C", "D", "Eb", "F", "G", "Ab", "Bb"] },
  { key: "C#", notesInKey: ["C#", "D#", "E", "F#", "G#", "A", "B"] },
  { key: "D", notesInKey: ["D", "E", "F", "G", "A", "Bb", "C"] },
  { key: "D#", notesInKey: ["D#", "E#", "F#", "G#", "A#", "B", "C#"] },
  { key: "Eb", notesInKey: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"] },
  { key: "E", notesInKey: ["E", "F#", "G", "A", "B", "C", "D"] },
  { key: "F", notesInKey: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"] },
  { key: "F#", notesInKey: ["F#", "G#", "A", "B", "C#", "D", "E"] },
  { key: "G", notesInKey: ["G", "A", "Bb", "C", "D", "Eb", "F"] },
  { key: "G#", notesInKey: ["G#", "A#", "B", "C#", "D#", "E", "F#"] },
];

const chromaticKeys = [
  {
    key: "Ab",
    notesInKey: [
      "Ab",
      "A",
      "Bb",
      "B",
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "F#",
      "G",
    ],
  },
  {
    key: "A",
    notesInKey: [
      "A",
      "A#",
      "B",
      "B#",
      "C#",
      "D",
      "D#",
      "E",
      "E#",
      "F#",
      "F",
      "G#",
    ],
  },
  {
    key: "A#",
    notesInKey: [
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
    ],
  },
  {
    key: "Bb",
    notesInKey: [
      "Bb",
      "B",
      "C",
      "C#",
      "D",
      "Eb",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
    ],
  },
  {
    key: "B",
    notesInKey: [
      "B",
      "B#",
      "C#",
      "C",
      "D#",
      "E",
      "E#",
      "F#",
      "F",
      "G#",
      "G",
      "A#",
    ],
  },
  {
    key: "Cb",
    notesInKey: [
      "Cb",
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
      "A",
      "Bb",
    ],
  },
  {
    key: "C",
    notesInKey: [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ],
  },
  {
    key: "C#",
    notesInKey: [
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
    ],
  },
  {
    key: "Db",
    notesInKey: [
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
      "A",
      "Bb",
      "B",
      "C",
    ],
  },
  {
    key: "D",
    notesInKey: [
      "D",
      "D#",
      "E",
      "E#",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "B#",
      "C#",
    ],
  },
  {
    key: "D#",
    notesInKey: [
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
    ],
  },
  {
    key: "Eb",
    notesInKey: [
      "Eb",
      "E",
      "F",
      "F#",
      "G",
      "Ab",
      "A",
      "Bb",
      "B",
      "C",
      "C#",
      "D",
    ],
  },

  {
    key: "E",
    notesInKey: [
      "E",
      "E#",
      "F#",
      "F",
      "G#",
      "A",
      "A#",
      "B",
      "B#",
      "C#",
      "C",
      "D#",
    ],
  },

  {
    key: "F",
    notesInKey: [
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "Bb",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
    ],
  },
  {
    key: "F#",
    notesInKey: [
      "F#",
      "F",
      "G#",
      "G",
      "A#",
      "B",
      "B#",
      "C#",
      "C",
      "D#",
      "D",
      "E#",
    ],
  },
  {
    key: "Gb",
    notesInKey: [
      "Gb",
      "G",
      "Ab",
      "A",
      "Bb",
      "B",
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
    ],
  },
  {
    key: "G",
    notesInKey: [
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "E#",
      "F#",
    ],
  },
  {
    key: "G#",
    notesInKey: [
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
    ],
  },
];
// How do we account for chords that aren't in the key?
// Boolean that says diatonic?
export const returnMajorKey = async ([...numbers]) => {
  let keyNumeralsData = [];
  console.log(`numbers ${JSON.stringify(numbers)}`);
  const loopThroughAllKeys = majorKeys.forEach((keyObject) => {
    let individualKeyData = [];
    //   Get the notes from the filtered key
    const chordsInKey = keyObject.notesInKey;
    //   Loop through the indexes to return the proper chords in the progression
    const getNumerals = numbers.forEach((number) => {
      let majorMinor;
      const progressions = chordsInKey[number.index - 1];
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
      // Combine note with major or minor notation
      const combine = `${progressions}${majorMinor}`;

      //   Push the numerals to an array to store all numerals for the key
      individualKeyData.push(combine);
    });
    // Push the individual keys to the array that holds all keys
    keyNumeralsData.push({ key: keyObject.key, numerals: individualKeyData });
  });
  return keyNumeralsData;
};
export const returnMinorKey = async ([...numbers]) => {
  let keyNumeralsData = [];

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

async function helloWorld(oogaBooga) {
  async function createProgression(data) {
    let allKeys = [];
    const loopThroughKeys = await data.forEach((key) => {
      allKeys.push({
        key: key.key,
        progression_in_key: key.numerals.join(" "),
      });
    });
  }
  let numeralsToNumbers = [];
  const splitNumerals = oogaBooga.numerals.split(" ");
  const getChordIndexes = await splitNumerals.forEach(
    (numeral, index, array) => {
      // Check to see if it's a major key or a minor key
      if (oogaBooga.is_major) {
        switch (numeral) {
          case "I":
            numeralsToNumbers.push({ index: 1, numeral: "I" });
            break;
          case "ii":
            numeralsToNumbers.push({ index: 2, numeral: "ii" });
            break;
          case "iii":
            numeralsToNumbers.push({ index: 3, numeral: "iii" });
            break;
          case "IV":
            numeralsToNumbers.push({ index: 4, numeral: "IV" });
            break;
          // Minor 4 Chord
          case "iv":
            numeralsToNumbers.push({ index: 4, numeral: "iv" });
            break;
          case "V":
            numeralsToNumbers.push({ index: 5, numeral: "V" });
            break;
          case "vi":
            numeralsToNumbers.push({ index: 6, numeral: "vi" });
            break;
          // Flat 7 Chord (Mixolydian)
          case "bVII":
            numeralsToNumbers.push({ index: 7, numeral: "bVII" });
            break;
          case "vii":
            numeralsToNumbers.push({ index: 7, numeral: "vii" });
            break;
          default:
            console.log(false);
        }
        if (index === array.length - 1) {
          const results = returnMajorKey(numeralsToNumbers).then((data) =>
            console.log(data)
          );
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

helloWorld({ numerals: "I IV iv bVII", is_major: true });

// const test = [];
// const push = test.push({ index: 1, numeral: "I" });
// const pushAgain = test.push({ index: 2, numeral: "ii" });
// console.log(test);

const getChromaticChords = () => {};
