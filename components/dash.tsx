import React from "react";
import styles from "../styles/Dashboard.module.scss";
import { Label } from "../types";

interface dashProps {
  labels: Label[];
}

const Dash: React.FunctionComponent<dashProps> = (props) => {
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
      <table>
        <caption>Label History</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  );
};

export default Dash;
