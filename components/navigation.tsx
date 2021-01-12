import React, { useState } from "react";

import Dropdown from "./dropdown";
import Logo from "../public/images/foodlabel.svg";
import Burger from "../public/images/burger.svg";
import Close from "../public/images/x.svg";
import styles from "./navigation.module.scss";

const Navigation: React.FunctionComponent = () => {
  const [isShowing, setIsShowing] = useState(false);

  // Conditionally change the image of the burger menu
  const handleBurgerImage = () => {
    return isShowing ? Close : Burger;
  };

  // Handles generating the content for the drop down when it is showing
  const handleDropDown = () => {
    return isShowing ? <Dropdown /> : null;
  };

  // Generate Menu List
  const generateMenu = () => {
    return (
      <React.Fragment>
        <ul>
          <li>
            <h4>How It Works</h4>
          </li>
          <li>
            <h4>Pricing</h4>
          </li>
          <li>
            <h4>How It Works</h4>
          </li>
        </ul>
      </React.Fragment>
    );
  };

  return (
    <header className={styles.navContainer}>
      <div className={styles.navRow}>
        <img src={Logo} draggable={false} />
        <ul>
          <li>
            <h4>How It Works</h4>
          </li>
          <li>
            <h4>Pricing</h4>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
          <li>
            <button>Sign In</button>
          </li>
        </ul>
        <button
          onClick={() => {
            setIsShowing(!isShowing);
          }}
        >
          <img src={handleBurgerImage()} draggable={false} />
        </button>
      </div>
      {handleDropDown()}
    </header>
  );
};

export default Navigation;
