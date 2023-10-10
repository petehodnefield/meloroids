import quickieImage from "../public/assets/images/quickie.png";
import artistTargetImage from "../public/assets/images/artist-target.png";
import targetImage from "../public/assets/images/target.png";
export const featuresDescriptions = [
  {
    name: "Data",
    description: [
      `To accurately target a style, you must know what parameters to use. Data by Meloroids solves this issue by displaying the key, tempo, and chords used in actual songs.`,
    ],
    image: quickieImage,
  },
  {
    name: "Quickie",
    description: [
      `We all know how annoying it is to come up with a name for our beat every time we sit down to make music.`,
      `Quickie is beat/loop name generator that perfectly formats your files allowing you to focus all your energy on making music.`,
    ],
    image: quickieImage,
  },
  {
    name: "Target",
    description: [
      `Target provides instant inspiration by showing you popular chord progressions for different genres.`,
      `Constraints are set before you make your music, making writer&#39;s block virtually impossible.`,
    ],
    image: targetImage,
  },
  {
    name: "Target",
    description: [
      `Artist Target pulls data from real artist songs. It is the fastest, most
      accurate way to write loops in the style of an artist.`,
      `Loop parameters are generated directly from an artist&apos;s
      discography, allowing you to make loops with pinpoint accuracy.{" "}`,
    ],
    image: artistTargetImage,
  },
];
