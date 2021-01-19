import React, { useState } from "react";
import Link from "next/link";
import Logo from "../public/images/foodlabel.svg";
import styles from "../styles/DashNavigation.module.scss";
import Burger from "../public/images/burger.svg";
import Close from "../public/images/x.svg";

interface DashNavProps {
  selected: string;
  handleSelect: (selection: string) => void;
}

const DashNavigation: React.FunctionComponent<DashNavProps> = ({
  selected,
  handleSelect,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  // Conditionally change the image of the burger menu
  const handleBurgerImage = () => {
    return isShowing ? Close : Burger;
  };
  // Will set the list styles according to the current selected tab
  const handleStyling = (title: string) => {
    return title === selected ? styles.selected : styles.unselected;
  };
  // Handles generating the content for the drop down when it is showing
  const handleDropDown = () => {
    const list = [{ title: "Dashboard" }, { title: "Settings" }];

    if (isShowing)
      return (
        <div className={styles.dropdown}>
          <ul className={styles.listContainer}>
            {list.map((element) => {
              return (
                <li>
                  <button
                    className={handleStyling(element.title)}
                    onClick={() => handleSelect(element.title)}
                  >
                    <p>{element.title}</p>
                  </button>
                </li>
              );
            })}
            <li>
              <button className={styles.primaryBtn}>Logout</button>
            </li>
          </ul>
        </div>
      );
  };

  const generateMenu = () => {
    const list = [{ title: "Dashboard" }, { title: "Settings" }];

    return (
      <ul>
        {list.map((element) => {
          return (
            <li>
              <button
                className={handleStyling(element.title)}
                onClick={() => handleSelect(element.title)}
              >
                <p>{element.title}</p>
              </button>
            </li>
          );
        })}
        <li className={styles.primaryBtn}>
          <button>
            <p>Logout</p>
          </button>
        </li>
      </ul>
    );
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
        <nav className={styles.desktopMenu}>{generateMenu()}</nav>
        <button
          className={styles.burger}
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

export default DashNavigation;
