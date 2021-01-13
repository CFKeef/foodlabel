import React from "react";
import styles from "../styles/Explanation.module.scss";

import index1 from "../public/images/index1.svg";
import index2 from "../public/images/index2.svg";
import index3 from "../public/images/index3.svg";

interface Step {
  step: number;
  header: string;
  subtext: string;
}

const Explanation: React.FunctionComponent = () => {
  // Generates the list of cards in the how it works section
  const generateList = () => {
    // Applies the correct color based on the index of the element
    const handleCardColor = (index: number) => {
      switch (index) {
        case 0:
          return styles.expCard0;
        case 1:
          return styles.expCard1;
        case 2:
          return styles.expCard2;
      }
    };
    // Returns the correct step # image based on the index of the element
    const handleCardImage = (index: number) => {
      switch (index) {
        case 0:
          return index1;
        case 1:
          return index2;
        case 2:
          return index3;
      }
    };
    const contentList: Step[] = [
      {
        step: 1,
        header: "Enter Your Ingredients",
        subtext:
          "Enter your all of the ingredients for your recipe into our application (we'll do the breakdowns for you)",
      },
      {
        step: 2,
        header: "Generate",
        subtext:
          "After all of your ingredients are entered, simply click generate and your label will be instantly created",
      },
      {
        step: 3,
        header: "Download",
        subtext:
          "Now you can download a print ready PDF. We offer four different layouts for you to choose from!",
      },
    ];
    return (
      <ol>
        {contentList.map((element, index) => {
          return (
            <li
              key={"expCard" + index}
              className={`${styles.contentContainer}  ${handleCardColor(
                index
              )}`}
            >
              <img
                src={handleCardImage(index)}
                alt={`This is step #${index + 1}`}
              />
              <h1>{element.header}</h1>
              <p>{element.subtext}</p>
            </li>
          );
        })}
      </ol>
    );
  };

  return (
    <section className={styles.explanationContainer}>
      <div className={styles.contentContainer}>
        <h1>How It Works</h1>
        <p>Understand our process in three easy steps!</p>
        {generateList()}
      </div>
    </section>
  );
};

export default Explanation;
