import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./dropdown";
import Logo from "../public/images/foodlabel.svg";
import Burger from "../public/images/burger.svg";
import Close from "../public/images/x.svg";
import styles from "../styles/navigation.module.scss";

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

  return (
    <header className={styles.navContainer}>
      <div className={styles.navRow}>
        <img
          src={Logo}
          draggable={false}
          className={styles.logoImage}
          alt={"Image depicting our logo"}
        />
        <nav className={styles.desktopMenu}>
          <ul>
            <li>
              <a href={"#explanation"}>How It Works</a>
            </li>
            <li>
              <a href={"#pricing"}>Pricing</a>
            </li>
            <li className={styles.primaryBtn}>
              <Link href={"/signup"} as={"/signup"}>
                <a>Sign Up</a>
              </Link>
            </li>
            <li className={styles.secondaryBtn}>
              <Link href={"/signin"} as={"/signin"}>
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </nav>
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
