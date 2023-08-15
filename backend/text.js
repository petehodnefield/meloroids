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
export const returnMajorKey = async ([...numbers]) => {
  let keyNumeralsData = [];

  const loopThroughAllKeys = majorKeys.forEach((keyObject) => {
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
          majorMinor = "";
          break;
        case 2:
          majorMinor = "-";
          break;
        case 3:
          majorMinor = "-";
          break;
        case 4:
          majorMinor = "";
          break;
        case 5:
          majorMinor = "";
          break;
        case 6:
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
  //   console.log("keyNumeralsData", keyNumeralsData);
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
  //   console.log("keyNumeralsData", keyNumeralsData);
  return await keyNumeralsData;
};
