import React, { FunctionComponent, useState } from "react";
import Logo from "../public/images/foodlabel.svg";
import Burger from "../public/images/burger.svg";
import Close from "../public/images/x.svg";

import styles from "./navigation.module.scss";

const Navigation = () => {
  const [isShowing, setIsShowing] = useState(false);

  // Conditionally change the image of the burger menu
  const handleBurgerImage = () => {
    return isShowing ? Close : Burger;
  };

  return (
    <header className={styles.navContainer}>
      <img src={Logo} draggable={false} />
      <button
        onClick={() => {
          setIsShowing(!isShowing);
        }}
      >
        <img src={handleBurgerImage()} draggable={false} />
      </button>
    </header>
  );
};

export default Navigation;
