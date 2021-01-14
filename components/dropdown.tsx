import React from "react";
import Link from "next/link";
import styles from "../styles/dropdown.module.scss";

const Dropdown: React.FunctionComponent = () => {
  return (
    <nav className={styles.parentContainer}>
      <ul className={styles.listContainer}>
        <li>
          <a href={"#explanation"}>How It Works</a>
        </li>
        <li>
          <a href={"#pricing"}>Pricing</a>
        </li>
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
