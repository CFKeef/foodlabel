import React from "react";
import Link from "next/link";
import styles from "../styles/DropDown.module.scss";

interface DropDownProps {
  showOnlyButtons: boolean;
}

const Dropdown: React.FunctionComponent<DropDownProps> = ({
  showOnlyButtons,
}: DropDownProps) => {
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

  return (
    <nav className={styles.parentContainer}>
      <ul className={styles.listContainer}>
        {handleGeneratingContainerLinks()}
        <li className={styles.primaryBtn}>
          <Link href={"/signup"}>Sign Up</Link>
        </li>
        <li className={styles.secondaryBtn}>
          <Link href={"/login"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dropdown;
