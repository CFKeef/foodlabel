import React from "react";
import styles from "../styles/Dash.module.scss";
import { Label } from "../types";
import Clone from "../public/images/clone.svg";
import Delete from "../public/images/delete.svg";
import Download from "../public/images/Download.svg";
import Edit from "../public/images/edit.svg";

interface dashProps {
  labels: Label[];
}

const Dash: React.FunctionComponent<dashProps> = ({ labels }) => {
  const generateTableRows = () => {
    if (labels.length === 0) {
      return (
        <tbody>
          <tr className={styles.emptyTable}>
            <td colSpan={4}>Create a label to populate this table!</td>
          </tr>
        </tbody>
      );
    }

    return (
      <tbody>
        {labels.map((label) => {
          return (
            <tr className={styles.populatedTable}>
              <td>{label.name}</td>
              <td>{label.date}</td>
              <td>{label.status}</td>
              <td>
                <button>
                  <img src={Edit} />
                </button>
                <button>
                  <img src={Delete} />
                </button>
                <button>
                  <img src={Download} />
                </button>
                <button>
                  <img src={Clone} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };
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
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.nameRow} scope="col">
              Name
            </th>
            <th className={styles.dateRow} scope="col">
              Date
            </th>
            <th className={styles.statusRow} scope="col">
              Status
            </th>
            <th className={styles.actionsRow} scope="col">
              Actions
            </th>
          </tr>
        </thead>
        {generateTableRows()}
      </table>
    </section>
  );
};

export default Dash;
