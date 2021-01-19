import React from "react";
import styles from "../styles/Dashboard.module.scss";
const Dash: React.FunctionComponent = () => {
  return (
    <section className={styles.dashContainer}>
      <div className={styles.menu}>
        <div className={styles.leftContainer}>
          <h2>Created Labels</h2>
          <input placeholder="Search" type="text"></input>
          <div></div>
        </div>
        <div className={styles.rightContainer}>
          <button>Create New Label</button>
        </div>
      </div>
    </section>
  );
};

export default Dash;
