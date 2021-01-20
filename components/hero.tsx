import React from "react";
import styles from "../styles/Hero.module.scss";
import HeroImage from "../public/images/heroimage.svg";
import Link from "next/link";

const Hero: React.FunctionComponent = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>Generate FDA Approved Nutrition Labels In Minutes</h1>
        <p>
          We allow you to create FDA compliant nutrition fact labels in the
          simplest way possible
        </p>
        <Link href={"/demo"}>Watch a Demo</Link>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={HeroImage}
          alt={"Decorative image depicting nutrition labels"}
        />
      </div>
    </section>
  );
};

export default Hero;
