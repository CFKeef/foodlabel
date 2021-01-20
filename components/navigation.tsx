import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./dropdown";
import Logo from "../public/images/foodlabel.svg";
import Burger from "../public/images/burger.svg";
import Close from "../public/images/close.svg";
import styles from "../styles/Navigation.module.scss";

interface NavigationProps {
  showOnlyButtons: boolean;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  showOnlyButtons,
}: NavigationProps) => {
  const [isShowing, setIsShowing] = useState(false);

  // Hides the links to jump to containers on specific pages
  const handleGeneratingContainerLinks = () => {
    if (showOnlyButtons) {
      return (
        <React.Fragment>
          <li>
            <a href={"#explanation"}>How It Works</a>
          </li>
          <li>
            <a href={"#pricing"}>Pricing</a>
          </li>
        </React.Fragment>
      );
    }
  };

  // Conditionally change the image of the burger menu
  const handleBurgerImage = () => {
    return isShowing ? Close : Burger;
  };

  // Handles generating the content for the drop down when it is showing
  const handleDropDown = () => {
    return isShowing ? <Dropdown showOnlyButtons={showOnlyButtons} /> : null;
  };

  return (
    <header className={styles.navContainer}>
      <div className={styles.navRow}>
        <Link href={"/"}>
          <a>
            <img
              src={Logo}
              draggable={false}
              className={styles.logoImage}
              alt={"Image depicting our logo"}
            />
          </a>
        </Link>
        <nav className={styles.desktopMenu}>
          <ul>
            {handleGeneratingContainerLinks()}
            <li className={styles.primaryBtn}>
              <Link href={"/signup"}>
                <a>Sign Up</a>
              </Link>
            </li>
            <li className={styles.secondaryBtn}>
              <Link href={"/login"}>
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
