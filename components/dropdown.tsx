import React from "react";
import Link from "next/link";
import styles from "./dropdown.module.scss";

const Dropdown: React.FunctionComponent = () => {
  return (
    <nav className={styles.parentContainer}>
      <ul className={styles.listContainer}>
        <li>
          <Link href={"/"} passHref>
            How It Works
          </Link>
        </li>
        <li>
          <Link href={"/"} passHref>
            Pricing
          </Link>
        </li>
        <li className={styles.primaryBtn}>
          <Link href={"/signup"} as={"/signup"}>
            Sign Up
          </Link>
        </li>
        <li className={styles.secondaryBtn}>
          <Link href={"/signin"} as={"/signin"}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dropdown;
