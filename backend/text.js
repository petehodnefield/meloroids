const notes = ["A", "B", "C", "D", "E", "F", "G"];
const sharps = ["A#", "C#", "D#", "F#", "G#"];
const flats = ["Ab", "Bb", "Db", "Eb", "Gb"];

const flatKeyNotes = ["A"];

const AbMajor = ["Ab", "Bb", "C", "Db", "Eb", "F", "G"];
const AMajor = ["A", "B", "C#", "D", "E", "F#", "G#", "A"];
const BbMajor = ["Bb", "C", "D", "Eb", "F", "G", "A"];
const BMajor = ["B", "C#", "D#", "E", "F#", "G#", "A#"];
const CbMajor = ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"];
const CMajor = ["C", "D", "E", "F", "G", "A", "B"];
const CSharpMajor = ["C#", "D#", "E#", "F#", "G#", "A#", "B#"];
const DbMajor = ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"];
const DMajor = ["D", "E", "F#", "G", "A", "B", "C#"];
const EbMajor = ["Eb", "F", "G", "Ab", "Bb", "C", "D"];
const EMajor = ["E", "F#", "G#", "A", "B", "C#", "D#"];
const FMajor = ["F", "G", "A", "Bb", "C", "D", "E"];
const FSharpMajor = ["F#", "G#", "A#", "B", "C#", "D#", "E#"];
const GbMajor = ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"];
const GMajor = ["G", "A", "B", "C", "D", "E", "F#"];

// Major Flat Keys
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

const returnMajorKey = async (key, [...numbers]) => {
  // Find the key that matches the key argument
  const filterKey = majorKeys.filter((keyName) => keyName.key == key);

  //   Get the notes from the filtered key
  const chordsInKey = filterKey[0].notesInKey;

  //   Loop through the indexes to return the proper chords in the progression
  numbers.forEach((number) => {
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
    console.log("combine", combine);
    return combine;
  });
};
returnMajorKey("E", [1, 1, 1, 4]);
