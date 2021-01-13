import React from "react";
import styles from "../styles/Pricing.module.scss";

const Pricing: React.FunctionComponent = () => {
  return (
    <section className={styles.pricingContainer}>
      <div className={styles.posContainer}>
        <h1>Pricing</h1>
        <p>Pay as you go or get a subscription package!</p>
      </div>
    </section>
  );
};

export default Pricing;
