import Image from "next/image";
import React, { useState } from "react";
import quickieImage from "../../../public/assets/images/quickie.png";
import targetImage from "../../../public/assets/images/target.png";
import dataImage from "../../../public/assets/images/data.png";
import artistTargetImage from "../../../public/assets/images/artist-target.png";
import { featuresDescriptions } from "../../../utils/features-descriptions";
const Features = () => {
  const [featureIndex, setFeatureIndex] = useState(0);
  const featureDescription = `text-1.125  font-medium mb-4`;
  const nextBtn = `bg-primary text-white h-12 w-full md:w-48 rounded font-semibold cursor-pointer mt-4`;
  const featureName = "text-2.5  font-semibold mb-4 lg:mb-8";
  const featureContainer = `min-h-400 lg:min-h-350 gap-12 lg:gap-0 flex flex-col lg:flex-row w-full items-center lg:items-start md:justify-between`;
  const featureTextWrapper = ` flex flex-col items-center lg:items-start lg:text-left max-w-660`;
  const featureImageWrapper = `w-full md:max-w-21 aspect-4/3 `;
  const featureImage = `h-full w-full object-cover rounded-lg`;

  //   Gets called whenever next button is clicked
  const getFeatureIndex = () => {
    if (featureIndex === featuresDescriptions.length - 1) {
      setFeatureIndex(0);
    } else {
      setFeatureIndex(featureIndex + 1);
    }
  };

  return (
    <section
      className="min-h-600 w-full flex items-center justify-center "
      id="features"
    >
      <div className="px-6 py-12 md:py-16 md:max-w-70 w-full flex flex-col lg:items-start text-center">
        {/* Line */}
        <div className="h-0.5 w-full lg:w-1/2 bg-light rounded-full mb-16 md:mb-20"></div>

        <h2 className="text-1.25 font-semibold text-darklight tracking-widest uppercase mb-4">
          Features
        </h2>

        {/* Data Container */}
        <div
          className={`${featureContainer} ${
            featureIndex === 0 ? "" : "hidden"
          }`}
        >
          <div className={`${featureTextWrapper}`}>
            <h3 className={`${featureName}`}>Data</h3>
            <div>
              <p className={`${featureDescription}`}>
                To accurately{" "}
                <span className="italic font-semibold">target&nbsp;</span> a
                style, you must know what{" "}
                <span className="italic font-semibold">parameters</span> to use.
              </p>
              <p className={`${featureDescription}`}>
                <span className="font-semibold text-primary">Data</span> by
                Meloroids solves this issue by displaying the key, tempo, and
                chords used in actual songs.
              </p>
            </div>
            <button onClick={() => getFeatureIndex()} className={`${nextBtn}`}>
              Next: Target
            </button>
          </div>
          <div className={`${featureImageWrapper}`}>
            <Image
              alt="The feature Data by Meloroids"
              src={dataImage}
              className={`${featureImage}`}
            />
          </div>
        </div>

        {/* Target Container */}
        <div
          className={`${featureContainer} ${
            featureIndex === 1 ? "" : "hidden"
          }`}
        >
          <div className={`${featureTextWrapper}`}>
            <h3 className={`${featureName}`}>Target</h3>
            <div>
              <p className={`${featureDescription}`}>
                <span className="text-primary font-bold">Target</span> provides
                instant inspiration by showing you popular chord progressions
                for different genres.
              </p>
              <p className={`${featureDescription}`}>
                Constraints are set{" "}
                <span className="italic font-bold text-primary">before</span>{" "}
                you write any music,{" "}
                <span className="font-bold">
                  making writer&#39;s block virtually impossible.
                </span>
              </p>
            </div>
            <button onClick={() => getFeatureIndex()} className={`${nextBtn}`}>
              Next: Artist Target
            </button>
          </div>
          <div className={`${featureImageWrapper}`}>
            <Image
              alt="the feature Target by Meloroids"
              src={targetImage}
              className={`${featureImage}`}
            />
          </div>
        </div>
        {/* Artist Target Container */}
        <div
          className={`${featureContainer} ${
            featureIndex === 2 ? "" : "hidden"
          }`}
        >
          <div className={`${featureTextWrapper}`}>
            <h3 className={`${featureName}`}>Artist Target</h3>
            <div>
              <p className={`${featureDescription}`}>
                <span className="font-bold text-primary">Artist Target </span>
                pulls data from real artist songs. It is the
                <span className="font-bold"> fastest, most accurate</span> way
                to write loops in the style of an artist.
              </p>
              <p className={`${featureDescription}`}>
                Loop parameters are generated directly from an artist&apos;s
                discography, allowing you to make loops with{" "}
                <span className="font-bold">pinpoint accuracy.</span>
              </p>
            </div>
            <button onClick={() => getFeatureIndex()} className={`${nextBtn}`}>
              Next: Quickie
            </button>
          </div>
          <div className={`${featureImageWrapper}`}>
            <Image
              alt="the feature Artist Target by Meloroids"
              src={artistTargetImage}
              className={`${featureImage}`}
            />
          </div>
        </div>
        {/* Quickie Container */}
        <div
          className={`${featureContainer} ${
            featureIndex === 3 ? "" : "hidden"
          }`}
        >
          <div className={`${featureTextWrapper}`}>
            <h3 className={`${featureName}`}>Quickie</h3>
            <div>
              <p className={`${featureDescription}`}>
                <span className="font-bold">We all know how</span> annoying it
                is to come up with a name for our beat every time we sit down to
                make music.
              </p>
              <p className={`${featureDescription}`}>
                <span className="font-bold text-primary">Quickie</span> is
                beat/loop name generator that perfectly formats your files
                allowing you to focus all your energy on making music.
              </p>
            </div>
            <button onClick={() => getFeatureIndex()} className={`${nextBtn}`}>
              Next: Target
            </button>
          </div>
          <div className={`${featureImageWrapper}`}>
            <Image
              alt="The feature Quickie by Meloroids"
              src={quickieImage}
              className={`${featureImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
