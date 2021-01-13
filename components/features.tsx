import React from "react";
import styles from "../styles/Features.module.scss";

import feature1 from "../public/images/feature1.svg";
import feature2 from "../public/images/feature2.svg";
import feature3 from "../public/images/feature3.svg";
import feature4 from "../public/images/feature4.svg";
import feature5 from "../public/images/feature5.svg";
import feature6 from "../public/images/feature6.svg";

interface feature {
  header: string;
  subheader: string;
}

const Features: React.FunctionComponent = () => {
  // Generates the list of cards in the features section
  const generateList = () => {
    // Returns the correct step # image based on the index of the element
    const handleCardImage = (index: number) => {
      switch (index) {
        case 0:
          return feature1;
        case 1:
          return feature2;
        case 2:
          return feature3;
        case 3:
          return feature4;
        case 4:
          return feature5;
        case 5:
          return feature6;
      }
    };
    const list: feature[] = [
      {
        header: "No Lab Required",
        subheader:
          "The FDA allows nutrition analysis with an authorized nutrition database which we have! That means there is no need to submit your data to a lab.",
      },
      {
        header: "Vector PDF Download",
        subheader:
          "We allow you to get a direct download of your label via a PDF. That means you get a high resolution vector scalable file that your designer or co-packer needs to finish your label design.",
      },
      {
        header: "No Installation Required",
        subheader:
          "With Foodlabel, you can access our platform completely through your browser. That means no program to download, and you can use a Mac or PC without any problems.",
      },
      {
        header: "Multiple File Formats",
        subheader:
          "We offer you multiple file formats to choose from. You can instantly download the one that best suits your needs for printing the label!",
      },
      {
        header: "Bulk Export Supported",
        subheader:
          "Easily export large quantities of labels in just a few clicks. Once you’ve created all of your labels, go to the dashboard and click the export button.",
      },
      {
        header: "Bulk Import Supported",
        subheader:
          "Want to import previous labels to stay organized? Simple! Click the import button on the dashboard and select the files from your computer. Instantly import them all to Foodlabel!",
      },
    ];
    return (
      <ul>
        {list.map((element, index) => {
          return (
            <li key={"feature" + index} className={styles.cardContainer}>
              <img src={handleCardImage(index)} />
              <h1>{element.header}</h1>
              <p>{element.subheader}</p>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.contentContainer}>
        <h1>Features</h1>
        <p>Check out the features we support!</p>
        {generateList()}
      </div>
    </section>
  );
};

export default Features;
