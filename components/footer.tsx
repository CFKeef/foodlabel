import React from "react";
import Logo from "../public/images/foodlabel.svg";
import styles from "../styles/Footer.module.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={Logo} />
      <p>© foodlabel 2021</p>
    </footer>
  );
};

export default Footer;
