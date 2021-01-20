import React, { useState } from "react";
import styles from "../styles/Settings.module.scss";

const Settings: React.FunctionComponent = () => {
  const [select, setSelected] = useState("Profile");

  const generateContent = () => {
    switch (select) {
      default:
        return (
          <div className={styles.profileContainer}>
            <div>gsfdgsdfg</div>
            <div>sdgfsfdd</div>
          </div>
        );
    }
  };

  const generateMenu = () => {
    const list = ["Profile"];

    return (
      <ul>
        {list.map((element) => {
          return (
            <li>
              <button
                onClick={() => setSelected(element)}
                className={element === select ? styles.selected : undefined}
              >
                {element}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className={styles.settingsContainer}>
      <h2>Settings</h2>
      <div className={styles.controlsContainer}>{generateMenu()}</div>
      {generateContent()}
      <div>
        <button>Save</button>
      </div>
    </section>
  );
};

export default Settings;
