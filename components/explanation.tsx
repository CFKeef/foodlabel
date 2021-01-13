import React from "react";
import styles from "../styles/Explanation.module.scss";

const Explanation: React.FunctionComponent = () => {
  const generateList = () => {
    return <ol></ol>;
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
